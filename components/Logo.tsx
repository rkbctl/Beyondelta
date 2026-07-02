type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * PLACEHOLDER for the real "Blur 2" logo file (nested blurred navy
 * triangles, black center ring with a gold arc, transparent cutout).
 * Swap this component's contents for the real asset once it's dropped
 * into public/ — keep the transparent center intact, it's not a flat fill.
 */
export function Logo({ size = 40, className = "" }: LogoProps) {
  const id = "logo-ring-cutout";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Beyondelta"
    >
      <defs>
        <mask id={id}>
          <rect width="100" height="100" fill="white" />
          <circle cx="50" cy="62" r="10" fill="black" />
        </mask>
      </defs>
      <g mask={`url(#${id})`}>
        <polygon points="50,8 92,88 8,88" fill="var(--color-navy)" opacity="0.55" />
        <polygon points="50,24 80,84 20,84" fill="var(--color-navy)" opacity="0.75" />
        <polygon points="50,40 68,80 32,80" fill="var(--color-navy)" />
      </g>
      <circle cx="50" cy="62" r="10" fill="none" stroke="var(--color-black)" strokeWidth="3" />
      <path
        d="M 41.5 68.5 A 10 10 0 0 1 44 54"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
