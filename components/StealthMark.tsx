"use client";

// Same geometry as public/brand/logo-dark.svg — field/off-white fill,
// gold arc — sequenced into a one-time cascade reveal, then held with a
// slow ambient pulse. No interaction, no reveal-the-site step: this is
// the whole page, not an intro to something else.
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

const LAYER_STAGGER_MS = 180;
const LAYER_DURATION_MS = 650;

export function StealthMark() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24">
      <div className="w-[min(60vw,320px)]">
        <svg viewBox="0 0 340 320" className="h-auto w-full" aria-hidden>
          <defs>
            <mask id="stealthRingCutout" maskUnits="userSpaceOnUse" x="0" y="0" width="340" height="320">
              <rect x="0" y="0" width="340" height="320" fill="#fff" />
              <circle cx="170" cy="196" r="14" fill="#000" />
            </mask>
            {LAYERS.map((layer, i) => (
              <filter key={i} id={`stealthBlur${i}`} x="-0.3" y="-0.3" width="1.6" height="1.6">
                <feGaussianBlur stdDeviation={layer.blur} />
              </filter>
            ))}
          </defs>
          <g mask="url(#stealthRingCutout)">
            {LAYERS.map((layer, i) => (
              <path
                key={i}
                d={layer.d}
                fill="var(--color-offwhite)"
                filter={`url(#stealthBlur${i})`}
                className="stealth-layer"
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
            stroke="var(--color-offwhite)"
            strokeWidth="2.2"
            className="stealth-ring"
          />
          <path
            d="M 179.00,185.28 A 14,14 0 0,1 182.69,190.08"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="2.2"
            className="stealth-ring"
          />
        </svg>
      </div>
      <span className="font-serif text-2xl tracking-tight text-offwhite">Beyond</span>
    </div>
  );
}
