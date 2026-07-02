"use client";

import { useCallback, useEffect, useState } from "react";

const RING_CX = 170;
const RING_CY = 196;
const RING_CX_PCT = (RING_CX / 340) * 100;
const RING_CY_PCT = (RING_CY / 320) * 100;
const LAYER_STAGGER_MS = 90;

// Outer -> inner: largest/most-blurred/lowest-opacity to smallest/sharpest.
// Geometry and blur radii copied from public/brand/logo.svg — same mark,
// don't redraw it, just sequence its own layers into a reveal.
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
const TOTAL_DURATION_MS = 2200;

/**
 * One-time entry sequence: the 8 logo layers cascade in from haze, the
 * mark dives into its own convergence ring, a flash clears, and the
 * actual site (already mounted underneath) is revealed. Plays once per
 * browser session, skips instantly on reduced-motion or repeat visits.
 */
export function IntroCascade() {
  const [ready, setReady] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) {
      setReady(true);
      return;
    }
    setPlay(true);
    setReady(true);
    sessionStorage.setItem(SESSION_KEY, "1");
    const timer = setTimeout(() => setPlay(false), TOTAL_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  const skip = useCallback(() => setPlay(false), []);

  if (!ready || !play) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      onClick={skip}
    >
      <div
        className="intro-zoom relative w-[min(60vw,360px)]"
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
                fill="var(--color-navy)"
                filter={`url(#introBlur${i})`}
                className="intro-layer"
                style={
                  {
                    "--op": layer.opacity,
                    animationDelay: `${i * LAYER_STAGGER_MS}ms`,
                  } as React.CSSProperties
                }
              />
            ))}
          </g>
          <path
            d="M 182.69,190.08 A 14,14 0 1,1 179.00,185.28"
            fill="none"
            stroke="#000000"
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

      <div
        className="intro-flash pointer-events-none absolute inset-0 bg-offwhite"
        style={{ animationDelay: "1710ms" }}
      />

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
