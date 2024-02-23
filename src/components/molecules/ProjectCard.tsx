import Image from "next/image";
import React from "react";

const ProjectCard = () => {
	return (
		<div className="flex flex-1 flex-row gap-8 px-10 py-5 max-w-[50%] max-h-[50%] border-2 dark:border-cyan-200 border-cyan-800 bg-cyan-200 dark:bg-gray-700">
			<div className="flex-1 flex flex-col items-start gap-8 w-70">
				<p className="text-2xl data-[theme=dark]:text-2xl">
					Filler - The form killer!
				</p>
				<p className="text-xl align-self-end underline">Chrome Extension</p>
				<Image
					src={"/images/project-placeholder.png"}
					width={400}
					height={400}
					alt="Project screenshot"
				/>
			</div>
			<div className="flex-1">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere
					modi laborum ad explicabo quaerat nemo molestiae fuga qui quisquam!
					Veniam maxime soluta accusamus cupiditate itaque ipsa delectus natus
					magnam!
				</p>
			</div>
		</div>
	);
};

export default ProjectCard;
