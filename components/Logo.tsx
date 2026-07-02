type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * Beyondelta mark, forced to solid white via filter. The source file's
 * navy/black/gold detail doesn't read at small sizes (that's the whole
 * legibility problem this is fixing) — a flat white silhouette against
 * the black page base is unambiguous at any size. Ring cutout still
 * shows through since the filter doesn't affect the mask.
 * Plain <img>, not next/image: Next's optimizer rejects local SVGs by
 * default (returns 400), and there's no resampling benefit for vector art.
 */
export function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <img
      src="/brand/logo.svg"
      alt="Beyondelta"
      width={340}
      height={320}
      className={className}
      style={{ height: size, width: "auto", filter: "brightness(0) invert(1)" }}
    />
  );
}
