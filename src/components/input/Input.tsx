import React, { ChangeEvent, InputHTMLAttributes } from "react";

import "./input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
	return (
		<input
			type={props.type}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange ? (e: ChangeEvent<HTMLInputElement>) => props.onChange!(e) : undefined}
		/>
	);
};

export default Input;
