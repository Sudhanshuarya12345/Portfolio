"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

function ForceLightOnLoad() {
  const { setTheme } = useTheme();
  const didInit = React.useRef(false);

  React.useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("theme");
    }
    setTheme("light");
  }, [setTheme]);

  return null;
}

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <ForceLightOnLoad />
      {children}
    </NextThemesProvider>
  );
}
