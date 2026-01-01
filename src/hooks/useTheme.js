import { useEffect, useState } from "react";

const STORAGE_KEY = "theme-mode";

export function useTheme() {
  // 1️⃣ Load saved theme or default to "system"
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    // 2️⃣ Detect system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const systemDark = mediaQuery.matches;

      const shouldUseDark =
        themeMode === "dark" || (themeMode === "system" && systemDark);

      if (shouldUseDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    // 3️⃣ Apply theme immediately
    applyTheme();

    // 4️⃣ Save user choice
    localStorage.setItem(STORAGE_KEY, themeMode);

    // 5️⃣ Listen to system theme changes (ONLY in system mode)
    if (themeMode === "system") {
      mediaQuery.addEventListener("change", applyTheme);
      return () => mediaQuery.removeEventListener("change", applyTheme);
    }
  }, [themeMode]);

  return { themeMode, setThemeMode };
}
