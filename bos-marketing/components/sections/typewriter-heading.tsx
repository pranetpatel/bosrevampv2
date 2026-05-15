"use client";

import { useEffect, useState } from "react";

const blinkKeyframes = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const words = ["Work", "Business", "Scaling", "Teams", "Operations"];

export function TypewriterHeading() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      
      if (isDeleting) {
        // Deleting characters
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setSpeed(75); // Faster when deleting
      } else {
        // Typing characters
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setSpeed(150); // Slower when typing
      }

      // If word is fully typed
      if (!isDeleting && currentText === fullWord) {
        setSpeed(2500); // Wait at the end of the word
        setIsDeleting(true);
      } 
      // If word is fully deleted
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setSpeed(500); // Small pause before typing next word
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, speed]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: blinkKeyframes }} />
      <h1 className="flex flex-wrap items-end justify-center gap-x-[0.08em] text-center font-[family-name:var(--font-display)] text-[clamp(2.75rem,10vw,8.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-white drop-shadow-[0_2px_40px_rgba(0,0,0,0.25)]">
      <span className="whitespace-nowrap">
        <span className="text-white">{currentText}</span>
        <span 
          className="ml-1 inline-block h-[0.75em] w-[0.05em] translate-y-[0.12em] bg-[var(--orchid)] shadow-[0_0_15px_var(--orchid)]" 
          style={{ animation: "blink 1s step-end infinite" }}
          aria-hidden 
        />
        {" "}Made Simple
      </span>
      <span
        className="mb-[0.14em] inline-block h-[0.26em] min-h-[9px] w-[0.26em] min-w-[9px] rounded-[3px] bg-gradient-to-br from-[var(--orchid)] to-[var(--magenta)] shadow-[0_0_28px_rgba(147,51,234,0.55)] sm:mb-[0.2em]"
        aria-hidden
      />
    </h1>
    </>
  );
}
