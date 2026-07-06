import { Suspense } from "react";
import { CalBooking } from "@/components/CalBooking";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-xl px-6 py-24">
      <h1 className="text-center font-serif text-4xl">Book a call</h1>
      <p className="mt-4 text-center text-offwhite/70">
        Pick a time that works &mdash; it goes straight onto the calendar.
      </p>

      <div className="mt-8 flex justify-center">
        <CalBooking />
      </div>

      <div className="mt-16">
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
