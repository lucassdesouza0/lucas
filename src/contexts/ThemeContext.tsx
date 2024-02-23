// contexts/ThemeContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ThemeProvider as ThemeProviderNext } from "next-themes";

type Theme = "light" | "dark";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	// const [theme, setTheme] = useState<Theme>("light");

	// const toggleTheme = () => {
	// 	setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	// };

	return <ThemeProviderNext>{children}</ThemeProviderNext>;
};

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
