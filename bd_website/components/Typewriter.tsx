"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED_MS = 70;
const DELETE_SPEED_MS = 35;
const HOLD_MS = 850;
const EMPTY_PAUSE_MS = 250;

type Phase = "typing" | "holding" | "deleting" | "empty";

/**
 * Cycles through `words`, typing and backspacing each in turn. No
 * reserved width — an earlier version used inline-block + min-width
 * sized to the longest word, which left a variable invisible gap
 * trailing after short words before the text that follows. Sentence
 * reflows slightly as words change length; that's the correct
 * tradeoff over a phantom gap. Falls back to a static, slash-joined
 * list for prefers-reduced-motion rather than animating.
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

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), DELETE_SPEED_MS);
        return () => clearTimeout(t);
      }
      // text.length === 0, confirmed — hold here before the next word
      // starts, rather than typing the next word in the same tick.
      setPhase("empty");
      return;
    }

    // phase === "empty": text is guaranteed "" for the entire pause.
    const t = setTimeout(() => {
      setWordIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    }, EMPTY_PAUSE_MS);
    return () => clearTimeout(t);
  }, [text, phase, wordIndex, words, reducedMotion]);

  if (reducedMotion) {
    return <span className="text-gold">{words.join(" / ")}</span>;
  }

  return (
    <span className="text-gold">
      {reducedMotion === null ? "" : text}
      <span className="animate-[blink_1s_step-end_infinite]">|</span>
    </span>
  );
}
