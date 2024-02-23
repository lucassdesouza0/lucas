import React from "react";
import ProjectCard from "@/components/molecules/ProjectCard";
import Typewriter from "@/components/atoms/Typewriter";
import greeting from "@/copy/greeting";
import ThemeSwitcher from "@/components/atoms/ThemeSwitcher";

const MainLayout = () => {
	return (
		<div className="h-full divide-y-8 divide-cyan-950 dark:divide-cyan-50 bg-gray-100 dark:bg-gray-800">
			<div className="w-full normal-padding ">
				<Typewriter
					words={greeting}
					loop={true}
					typingSpeed={30}
					deletingSpeed={50}
					className="text-8xl h-[6rem] w-auto typewriter"
				/>
				<ThemeSwitcher />
			</div>
			<div className="flex flex-row gap-1 p-10 ">
				<ProjectCard />
			</div>
		</div>
	);
};

export default MainLayout;
