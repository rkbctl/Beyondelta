import { Suspense } from "react";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-xl px-6 py-24">
      <h1 className="text-center font-serif text-4xl">[Book a call]</h1>
      <p className="mt-4 text-center text-offwhite/70">[Low-friction intro line]</p>

      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </section>
  );
}
