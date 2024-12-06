import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { IFormInputCheckboxProps } from "./FormInputProps";

export const FormInputCheckbox: FC<IFormInputCheckboxProps> = ({
	name,
	control,
	label,
	...props
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<FormControl error={!!error}>
					<FormControlLabel
						control={<Checkbox {...props} checked={!!value} onChange={onChange} />}
						label={label}
					/>
					{error && <FormHelperText>{error.message}</FormHelperText>}
				</FormControl>
			)}
		/>
	);
};
