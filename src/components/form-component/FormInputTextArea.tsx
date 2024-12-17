import { Controller } from "react-hook-form";
import { IFormInputProps } from "./FormInputProps";
import TextField from "@mui/material/TextField";
import { FC } from "react";

export const FormInputTextArea: FC<IFormInputProps> = ({
	name,
	control,
	...props
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					{...props}
					helperText={error ? error.message : null}
					error={!!error}
					onChange={onChange}
					value={value}
					multiline
				/>
			)}
		/>
	);
};
