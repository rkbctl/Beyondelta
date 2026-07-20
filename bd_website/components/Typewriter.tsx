"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED_MS = 70;
const DELETE_SPEED_MS = 35;
const HOLD_MS = 850;

type Phase = "typing" | "holding" | "deleting";

/**
 * Cycles through `words`, typing and backspacing each in turn. Reserves
 * width for the longest word so surrounding text doesn't reflow as it
 * types/deletes. Falls back to a static, slash-joined list for
 * prefers-reduced-motion rather than animating.
 */
export function Typewriter({ words }: { words: string[] }) {
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion !== false) return;
    const currentWord = words[wordIndex];

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const t = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), TYPE_SPEED_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("holding"), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), HOLD_MS);
      return () => clearTimeout(t);
    }

    // deleting
    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), DELETE_SPEED_MS);
      return () => clearTimeout(t);
    }
    setWordIndex((i) => (i + 1) % words.length);
    setPhase("typing");
  }, [text, phase, wordIndex, words, reducedMotion]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  if (reducedMotion) {
    return <span className="text-gold">{words.join(" / ")}</span>;
  }

  return (
    <span
      className="inline-block text-left text-gold"
      style={{ minWidth: `${longest.length}ch` }}
    >
      {reducedMotion === null ? longest : text}
      <span className="animate-[blink_1s_step-end_infinite]">|</span>
    </span>
  );
}
