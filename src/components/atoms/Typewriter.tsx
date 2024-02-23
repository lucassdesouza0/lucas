"use client";
import React, { useState, useEffect, HTMLAttributes } from "react";

interface TypewriterProps extends HTMLAttributes<HTMLHeadingElement> {
	words: string[];
	loop?: boolean;
	typingSpeed?: number;
	deletingSpeed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
	words,
	loop = true,
	typingSpeed = 150,
	deletingSpeed = 75,
	...props
}) => {
	const [index, setIndex] = useState<number>(0);
	const [subIndex, setSubIndex] = useState<number>(0);
	const [currentWord, setCurrentWord] = useState<string>("");
	const [isDeleting, setIsDeleting] = useState<boolean>(false);

	useEffect(() => {
		if (
			subIndex === words[index].length + 1 &&
			!isDeleting &&
			index !== words.length - 1
		) {
			setTimeout(() => setIsDeleting(true), 1000);
		} else if (isDeleting && subIndex === 0) {
			setIsDeleting(false);
			setIndex((prevIndex) => (prevIndex + 1) % words.length);
		}

		const timeout = setTimeout(
			() => {
				setCurrentWord((prev) =>
					words[index].substring(0, isDeleting ? subIndex - 1 : subIndex + 1)
				);
				setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
			},
			isDeleting ? deletingSpeed : typingSpeed
		);

		return () => clearTimeout(timeout);
	}, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, loop]);

	return (
		<h1 {...props}>
			<span>{currentWord}</span>
		</h1>
	);
};

export default Typewriter;
