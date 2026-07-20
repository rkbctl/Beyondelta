"use client";

import { useEffect, useRef } from "react";

// Cal.com's embed snippet patches properties onto this function at
// runtime (ns, q, loaded, config) — untyped in Cal's own docs too, so
// `any` here is the pragmatic choice rather than fighting a shape that
// only exists after the vendor script mutates it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CalFn = any;

declare global {
  interface Window {
    Cal?: CalFn;
  }
}

const CAL_LINK = "rkbctl/book-a-call";
const CAL_ORIGIN = "https://app.cal.eu";
const CAL_NAMESPACE = "book-a-call";
const CONTAINER_ID = "my-cal-inline-book-a-call";

/**
 * Cal.com inline booking embed (EU instance, app.cal.eu — matches Cal
 * account's data region). forwardQueryParams carries this page's UTM
 * params (see lib/utm.ts / CtaLink) straight into the booking link, so
 * campaign attribution survives through to a booked call automatically.
 * Guarded to init only once even under React StrictMode's double-effect.
 * Logic here is a direct port of Cal.com's own embed snippet — kept
 * structurally identical rather than rewritten, to avoid behavior drift.
 */
export function CalBooking() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    (function (C: Window, A: string, L: string) {
      const p = function (a: CalFn, ar: unknown) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: unknown[]) {
          const cal = C.Cal;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).setAttribute("src", A);
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api: CalFn = function (...apiArgs: unknown[]) {
              p(api, apiArgs);
            };
            api.q = api.q || [];
            const namespace = args[1];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], args);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, args);
            }
            return;
          }
          p(cal, args);
        };
    })(window, `${CAL_ORIGIN}/embed/embed.js`, "init");

    window.Cal("init", CAL_NAMESPACE, { origin: CAL_ORIGIN });
    window.Cal.config = window.Cal.config || {};
    window.Cal.config.forwardQueryParams = true;

    window.Cal.ns[CAL_NAMESPACE]("inline", {
      elementOrSelector: `#${CONTAINER_ID}`,
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "dark" },
      calLink: CAL_LINK,
    });

    window.Cal.ns[CAL_NAMESPACE]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
      theme: "dark",
      cssVarsPerTheme: {
        dark: {
          "cal-bg": "#13253a",
          "cal-bg-emphasis": "#0d1b2a",
          "cal-border-booker": "rgba(236,202,79,0.2)",
          "cal-text-emphasis": "#f5f5f0",
        },
      },
    });
  }, []);

  return (
    <div
      id={CONTAINER_ID}
      className="h-[500px] w-full overflow-auto rounded-2xl border border-gold/20 bg-navy-raised p-2"
    />
  );
}
