import type { Metadata } from "next";
import { StealthMark } from "@/components/StealthMark";
import { CalBooking } from "@/components/CalBooking";

export const metadata: Metadata = {
  title: "Beyondelta",
  description: "Beyondelta.",
};

/**
 * Stealth placeholder — served for every route (URL stays whatever the
 * visitor typed) unless proxy.ts finds a valid unlock cookie/key.
 * Reveals nothing about site structure, positioning, or pricing — but
 * still lets someone book a call, and the Footer (Impressum/Datenschutz)
 * stays up site-wide regardless of stealth mode, per German legal
 * requirements (see app/layout.tsx).
 */
export default function ComingSoonPage() {
  return (
    <>
      <StealthMark />
      <div className="mx-auto w-full max-w-2xl px-6 pb-16 text-center">
        <p className="font-mono text-2xl uppercase tracking-[0.15em] text-gold sm:text-3xl">
          Working out product-market fit (PMF) and go-to-market (GTM) as an
          early-stage startup?
        </p>
        <p className="mt-4 font-serif text-xl text-offwhite">
          Going beyond PMF and GTM with Agents and AI on your side.
        </p>
      </div>
      <div className="mx-auto w-full max-w-4xl px-6 pb-24">
        <p className="text-center text-sm text-offwhite/50">
          Book a call.
        </p>
        <div className="mt-6">
          <CalBooking />
        </div>
      </div>
    </>
  );
}
