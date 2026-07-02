type DeltaDividerProps = {
  /** Flip orientation so the cascade points the other way. */
  flip?: boolean;
  className?: string;
};

/**
 * Diagonal section divider echoing the logo's nested-triangle cascade
 * toward a point. Used between page sections instead of a straight rule.
 * No motion here — staggering/reveal is applied by the caller on scroll.
 */
export function DeltaDivider({ flip = false, className = "" }: DeltaDividerProps) {
  return (
    <div
      aria-hidden
      className={`relative h-16 w-full overflow-hidden sm:h-24 ${className}`}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`h-full w-full ${flip ? "-scale-y-100" : ""}`}
      >
        <polygon points="0,0 1200,0 1200,40 600,120 0,40" fill="var(--color-navy)" />
        <polygon
          points="0,0 1200,0 1200,22 600,86 0,22"
          fill="none"
          stroke="var(--color-gold)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <polygon
          points="0,0 1200,0 1200,10 600,54 0,10"
          fill="none"
          stroke="var(--color-gold)"
          strokeOpacity="0.6"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
