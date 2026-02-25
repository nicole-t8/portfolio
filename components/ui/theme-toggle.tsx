"use client";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <button
      className="z-50 text-amber-50"
      onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
    >
      {isDarkTheme ? <Moon /> : <SunMedium />}
    </button>
  );
}
