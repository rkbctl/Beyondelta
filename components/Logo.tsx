import Image from "next/image";

type LogoProps = {
  size?: number;
  className?: string;
};

/** Beyondelta mark — nested blurred navy triangles, black ring, gold arc. */
export function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <Image
      src="/brand/logo.svg"
      alt="Beyondelta"
      width={340}
      height={320}
      priority
      className={className}
      style={{ height: size, width: "auto" }}
    />
  );
}
