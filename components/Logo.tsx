type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * Beyondelta mark — nested blurred navy triangles, black ring, gold arc.
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
      style={{ height: size, width: "auto" }}
    />
  );
}
