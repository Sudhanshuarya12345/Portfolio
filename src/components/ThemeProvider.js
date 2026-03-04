"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme } from "next-themes";

const THEME_INIT_KEY = "theme_initialized";

function InitializeThemeOnce() {
  const { setTheme } = useTheme();

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const isInitialized = window.localStorage.getItem(THEME_INIT_KEY);
    if (!isInitialized) {
      setTheme("light");
      window.localStorage.setItem(THEME_INIT_KEY, "1");
    }
  }, [setTheme]);

  return null;
}

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <InitializeThemeOnce />
      {children}
    </NextThemesProvider>
  );
}
