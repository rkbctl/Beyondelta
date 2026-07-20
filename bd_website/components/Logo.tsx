type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * Beyondelta mark — dark-field variant (field/off-white haze, gold arc),
 * per Beyondelta_Brand_Kit.html. This is the correct fix for the earlier
 * legibility problem: the mark's fill adapts to its background per the
 * brand system (navy fill on light fields, field fill on dark fields) —
 * it isn't that navy always reads poorly, it's that the wrong variant
 * was being used against a dark page. The site is dark everywhere this
 * component is used, so this is the only variant it needs.
 * Plain <img>, not next/image: Next's optimizer rejects local SVGs by
 * default (returns 400), and there's no resampling benefit for vector art.
 */
export function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <img
      src="/brand/logo-dark.svg"
      alt="Beyondelta"
      width={340}
      height={320}
      className={className}
      style={{ height: size, width: "auto" }}
    />
  );
}
