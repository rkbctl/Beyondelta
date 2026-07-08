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
      <div className="mx-auto w-full max-w-4xl px-6 pb-24">
        <p className="text-center text-sm text-offwhite/50">
          Want to talk in the meantime? Book a call.
        </p>
        <div className="mt-6">
          <CalBooking />
        </div>
      </div>
    </>
  );
}
