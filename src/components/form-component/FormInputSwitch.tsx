import { Controller } from "react-hook-form";
import { IFormInputProps, IFormInputSwitchProps } from "./FormInputProps";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { FC } from "react";

export const FormInputSwitch: FC<IFormInputSwitchProps> = ({
	name,
	control,
	...props
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<FormControl error={!!error}>
					<FormControlLabel
						control={<Switch checked={!!value} onChange={onChange} />}
						label={props.label}
					/>
					{error && <FormHelperText>{error.message}</FormHelperText>}
				</FormControl>
			)}
		/>
	);
};
