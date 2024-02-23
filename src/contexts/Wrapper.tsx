"use client";

import React, { ReactNode } from "react";
// import { ThemeProvider } from "./ThemeContext";
import { ThemeProvider } from "next-themes";

const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
