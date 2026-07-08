import type { Metadata } from "next";
import { StealthMark } from "@/components/StealthMark";

export const metadata: Metadata = {
  title: "Beyondelta",
  description: "Beyondelta.",
};

/**
 * Stealth placeholder — served for every route (URL stays whatever the
 * visitor typed) unless middleware.ts finds a valid unlock cookie/key.
 * Reveals nothing about site structure, positioning, or pricing.
 */
export default function ComingSoonPage() {
  return <StealthMark />;
}
