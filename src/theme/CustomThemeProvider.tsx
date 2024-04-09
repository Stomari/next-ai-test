"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState, useMemo, createContext } from "react";
import { darkTheme, lightTheme } from "./theme";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

type TCustomThemeProvider = {
  children: React.ReactNode;
};

export const CustomThemeProvider = (props: TCustomThemeProvider) => {
  const { children } = props;
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () => (mode === "dark" ? darkTheme : lightTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
