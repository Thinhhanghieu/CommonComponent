import React from "react";

import "./button.scss";

interface ButtonProps {
	className?: string;
	onClick?: () => void;
	children?: React.ReactNode;
	type?: "submit" | "button" | "reset";
}

const Button: React.FC<ButtonProps> = ({
	className,
	onClick,
	type = "button",
	children,
}) => {
	return (
		<button
			className={`btn ${className}`}
			onClick={onClick ? () => onClick() : undefined}
			type={type}
		>
			{children}
		</button>
	);
};

export const OutlineButton: React.FC<ButtonProps> = ({
	className,
	onClick,
	children,
	type,
}) => {
	return (
		<Button
			className={`btn-outline ${className}`}
			onClick={onClick ? () => onClick() : undefined}
			type={type}
		>
			{children}
		</Button>
	);
};

export default Button;
