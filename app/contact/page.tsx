import { Suspense } from "react";
import { CalBooking } from "@/components/CalBooking";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-serif text-4xl">Book a call</h1>
        <p className="mt-4 text-offwhite/70">
          Pick a time that works &mdash; it goes straight onto the calendar.
        </p>
      </div>

      <div className="mt-8">
        <CalBooking />
      </div>

      <div className="mx-auto mt-16 max-w-xl">
        <p className="text-center text-sm text-offwhite/50">
          Prefer to write instead? Send a message below.
        </p>
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}
