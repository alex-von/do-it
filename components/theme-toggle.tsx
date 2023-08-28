"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <Button variant="ghost"  onClick={toggleTheme}>
      {isDarkMode ? (
          <MoonIcon />
      ) : (
          <SunIcon className=" dark:text-white" />
      )}
    </Button>
  );
}
