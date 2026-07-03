"use client";

import { useCallback, useEffect, useState } from "react";

const RING_CX = 170;
const RING_CY = 196;
const RING_CX_PCT = (RING_CX / 340) * 100;
const RING_CY_PCT = (RING_CY / 320) * 100;

const LAYER_STAGGER_MS = 200;
const LAYER_DURATION_MS = 600;
const CASCADE_TOTAL_MS = 7 * LAYER_STAGGER_MS + LAYER_DURATION_MS; // ~2000ms

const ZOOM_DURATION_MS = 600;
const FLASH_DELAY_MS = 380;
const FLASH_DURATION_MS = 220;
const ZOOM_TOTAL_MS = Math.max(ZOOM_DURATION_MS, FLASH_DELAY_MS + FLASH_DURATION_MS) + 100;

// Outer -> inner: largest/most-blurred/lowest-opacity to smallest/sharpest.
// Geometry and blur radii match public/brand/logo-dark.svg (the dark-field
// variant — field/off-white fill, since this plays on the navy base) —
// same mark, don't redraw it, just sequence its own layers into a reveal.
const LAYERS = [
  { d: "M 170.0 50.0 L 296.0 270.0 L 44.0 270.0 Z", opacity: 0.45, blur: 16 },
  { d: "M 170.0 85.8 L 265.1 251.9 L 74.9 251.9 Z", opacity: 0.52, blur: 14 },
  { d: "M 170.0 112.7 L 241.8 238.2 L 98.2 238.2 Z", opacity: 0.59, blur: 12 },
  { d: "M 170.0 133.1 L 224.3 227.9 L 115.7 227.9 Z", opacity: 0.66, blur: 10 },
  { d: "M 170.0 148.5 L 211.0 220.1 L 129.0 220.1 Z", opacity: 0.74, blur: 8 },
  { d: "M 170.0 160.2 L 200.9 214.2 L 139.1 214.2 Z", opacity: 0.81, blur: 6 },
  { d: "M 170.0 168.9 L 193.4 209.7 L 146.6 209.7 Z", opacity: 0.88, blur: 4 },
  { d: "M 170.0 175.6 L 187.6 206.4 L 152.4 206.4 Z", opacity: 0.95, blur: 2 },
];

const SESSION_KEY = "beyondelta-intro-seen";

type Phase = "cascading" | "waiting" | "zooming" | "done";

/**
 * Entry sequence: the 8 logo layers cascade in slowly from haze and hold,
 * fully formed, until the visitor moves the mouse, scrolls, touches, or
 * presses a key — then it dives through its own convergence ring into a
 * flash reveal of the site (already mounted underneath). Plays once per
 * browser session, skips instantly on reduced-motion or repeat visits.
 */
export function IntroCascade() {
  const [phase, setPhase] = useState<Phase | null>(null);

  // Determine whether to play at all, and run the auto cascade-in.
  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) {
      setPhase("done");
      return;
    }
    setPhase("cascading");
    const timer = setTimeout(() => setPhase("waiting"), CASCADE_TOTAL_MS);
    return () => clearTimeout(timer);
  }, []);

  // Once settled, any interaction triggers the dive-through.
  useEffect(() => {
    if (phase !== "waiting") return;
    const trigger = () => setPhase("zooming");
    const opts = { once: true } as const;
    window.addEventListener("mousemove", trigger, opts);
    window.addEventListener("wheel", trigger, opts);
    window.addEventListener("touchstart", trigger, opts);
    window.addEventListener("touchmove", trigger, opts);
    window.addEventListener("keydown", trigger, opts);
    return () => {
      window.removeEventListener("mousemove", trigger);
      window.removeEventListener("wheel", trigger);
      window.removeEventListener("touchstart", trigger);
      window.removeEventListener("touchmove", trigger);
      window.removeEventListener("keydown", trigger);
    };
  }, [phase]);

  // Zoom + flash, then unmount and remember for this session.
  useEffect(() => {
    if (phase !== "zooming") return;
    sessionStorage.setItem(SESSION_KEY, "1");
    const timer = setTimeout(() => setPhase("done"), ZOOM_TOTAL_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  const skip = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("done");
  }, []);

  if (!phase || phase === "done") return null;

  const zooming = phase === "zooming";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy" onClick={skip}>
      <div
        className={`relative w-[min(70vw,440px)] ${zooming ? "intro-zoom" : ""}`}
        style={{ transformOrigin: `${RING_CX_PCT}% ${RING_CY_PCT}%` }}
      >
        <svg viewBox="0 0 340 320" className="h-auto w-full" aria-hidden>
          <defs>
            <mask id="introRingCutout" maskUnits="userSpaceOnUse" x="0" y="0" width="340" height="320">
              <rect x="0" y="0" width="340" height="320" fill="#fff" />
              <circle cx={RING_CX} cy={RING_CY} r="14" fill="#000" />
            </mask>
            {LAYERS.map((layer, i) => (
              <filter key={i} id={`introBlur${i}`} x="-0.3" y="-0.3" width="1.6" height="1.6">
                <feGaussianBlur stdDeviation={layer.blur} />
              </filter>
            ))}
          </defs>
          <g mask="url(#introRingCutout)">
            {LAYERS.map((layer, i) => (
              <path
                key={i}
                d={layer.d}
                fill="var(--color-offwhite)"
                filter={`url(#introBlur${i})`}
                className="intro-layer"
                style={
                  {
                    "--op": layer.opacity,
                    animationDuration: `${LAYER_DURATION_MS}ms`,
                    animationDelay: `${i * LAYER_STAGGER_MS}ms`,
                  } as React.CSSProperties
                }
              />
            ))}
          </g>
          <path
            d="M 182.69,190.08 A 14,14 0 1,1 179.00,185.28"
            fill="none"
            stroke="var(--color-offwhite)"
            strokeWidth="2.2"
          />
          <path
            d="M 179.00,185.28 A 14,14 0 0,1 182.69,190.08"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="2.2"
          />
        </svg>
      </div>

      {phase === "waiting" && (
        <p className="intro-hint absolute bottom-[38%] left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-offwhite/40">
          Move to continue
        </p>
      )}

      {zooming && (
        <div
          className="intro-flash pointer-events-none absolute inset-0 bg-offwhite"
          style={{ animationDelay: `${FLASH_DELAY_MS}ms`, animationDuration: `${FLASH_DURATION_MS}ms` }}
        />
      )}

      <button
        type="button"
        onClick={skip}
        className="absolute bottom-6 right-6 text-xs text-offwhite/40 transition-colors hover:text-offwhite/70"
      >
        Skip
      </button>
    </div>
  );
}
