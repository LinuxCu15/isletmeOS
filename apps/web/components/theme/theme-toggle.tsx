"use client";

import { useEffect, useState } from "react";
import { Button } from "@isletmeos/ui";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("isletmeos-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;

    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("isletmeos-theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle dark mode">
      {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  );
}

