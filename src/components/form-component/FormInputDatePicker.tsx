import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export const FormInputDatePicker = ({
	name,
	control,
	label,
}: FormInputProps) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<DatePicker label={label} value={value} onChange={onChange} />
			)}
		/>
	);
};
