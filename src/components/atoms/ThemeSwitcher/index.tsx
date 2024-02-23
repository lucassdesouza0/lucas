// components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return <></>;

	return (
		<button
			className={`p-2 ${
				theme === "dark" ? "text-themes-dark-text" : "text-themes-light-text"
			}`}
			onClick={() => {
				setTheme(theme === "dark" ? "light" : "dark");
			}}
		>
			Toggle Theme
		</button>
	);
};

export default ThemeSwitcher;
