"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, type ComponentProps } from "react";
import { withUtm } from "@/lib/utm";

type CtaLinkProps = ComponentProps<typeof Link>;

function CtaLinkInner({ href, ...rest }: CtaLinkProps) {
  const searchParams = useSearchParams();
  const target = typeof href === "string" ? withUtm(href, searchParams) : href;
  return <Link href={target} {...rest} />;
}

/**
 * Internal CTA link that forwards this page's UTM params to its destination.
 * Falls back to a plain (UTM-less) link during the first paint so the page
 * can still be statically rendered.
 */
export function CtaLink(props: CtaLinkProps) {
  return (
    <Suspense fallback={<Link {...props} />}>
      <CtaLinkInner {...props} />
    </Suspense>
  );
}
