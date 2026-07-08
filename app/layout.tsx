import type { Metadata } from "next";
import { headers } from "next/headers";
import { Fraunces, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beyondelta — PMF & GTM execution for early-stage B2B startups",
  description:
    "Execution-led PMF validation and go-to-market strategy for early-stage B2B startups, and process automation for Mittelstand — Karlsruhe, Germany.",
  icons: {
    icon: "/brand/logo-stamp.svg",
    apple: "/brand/logo.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const isStealthMode = headersList.get("x-stealth-mode") === "1";

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-navy text-offwhite">
        {!isStealthMode && <Nav />}
        <main className="flex flex-1 flex-col">{children}</main>
        {/* Footer (Impressum/Datenschutz) stays visible even in stealth
            mode — German law requires the Impressum reachable from every
            page. It reveals no positioning/pricing/structure, just legal
            links, so it's safe to keep up. */}
        <Footer />
      </body>
    </html>
  );
}
