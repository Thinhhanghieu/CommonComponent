import { Controller } from "react-hook-form";
import { IFormInputProps } from "./FormInputProps";
import TextField from "@mui/material/TextField";

export const FormInputTextArea = ({
	name,
	control,
	label,
	variant = "outlined",
}: IFormInputProps) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					helperText={error ? error.message : null}
					size="small"
					error={!!error}
					onChange={onChange}
					value={value}
					fullWidth
					label={label}
					variant={variant}
					multiline
					rows={4}
				/>
			)}
		/>
	);
};
