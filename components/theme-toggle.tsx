"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
          return;
        }
        setTheme("dark");
      }}
      className="rounded-full p-1 hover:bg-gray-200 hover:dark:bg-gray-700 mr-3"
    >
      {theme === "dark" ? (
        <span className="sun-icon">
          <SunIcon height={23} width={23} />
        </span>
      ) : (
        <span className="moon-icon">
          <MoonIcon height={23} width={23} />
        </span>
      )}
    </button>
  );
}
