"use client";

import { useSearchParams } from "next/navigation";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

const HEARD_ABOUT_OPTIONS = [
  "LinkedIn message",
  "Email",
  "Phone call",
  "Referral",
  "Search / other",
];

/**
 * Booking form skeleton. UTM params from the incoming URL ride along as
 * hidden fields for link-based campaigns; the "how did you hear about us"
 * field covers phone-originated Mittelstand leads that carry no UTM.
 *
 * TODO: wire submit handler to actual booking backend once tech stack for
 * that piece is decided (Calendly embed vs. custom endpoint, etc.)
 */
export function ContactForm() {
  const searchParams = useSearchParams();

  return (
    <form
      className="mt-10 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: submit handler
      }}
    >
      {UTM_KEYS.map((key) => {
        const value = searchParams.get(key);
        return value ? <input key={key} type="hidden" name={key} value={value} /> : null;
      })}

      <div>
        <label htmlFor="name" className="block text-sm text-offwhite/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-gold/20 bg-navy-raised px-4 py-3 text-offwhite focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-offwhite/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-gold/20 bg-navy-raised px-4 py-3 text-offwhite focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm text-offwhite/70">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-1 w-full rounded-lg border border-gold/20 bg-navy-raised px-4 py-3 text-offwhite focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="heard-about" className="block text-sm text-offwhite/70">
          How did you hear about us?
        </label>
        <select
          id="heard-about"
          name="heard_about"
          className="mt-1 w-full rounded-lg border border-gold/20 bg-navy-raised px-4 py-3 text-offwhite focus:border-gold focus:outline-none"
        >
          {HEARD_ABOUT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-offwhite/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-gold/20 bg-navy-raised px-4 py-3 text-offwhite focus:border-gold focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-gold px-8 py-3 text-sm font-medium text-navy hover:opacity-90"
      >
        Request a call
      </button>
    </form>
  );
}
