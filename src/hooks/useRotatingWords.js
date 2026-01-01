// src/hooks/useRotatingWords.js
import { useEffect, useState } from "react";

export function useRotatingWords(words, interval = 3000) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIsAnimating(true);

      // Wait for fade out, then change word
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300); // Half of transition duration
    }, interval);

    return () => clearInterval(id);
  }, [words.length, interval]);

  return { word: words[index], isAnimating };
}
