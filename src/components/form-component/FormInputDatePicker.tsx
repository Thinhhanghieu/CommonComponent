import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from "react-hook-form";
import { IFormInputDatePickerProps } from "./FormInputProps";
import { FC } from 'react';
export const FormInputDatePicker: FC<IFormInputDatePickerProps> = ({
  control,
  name,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <DatePicker
        {...props}
        value={value}
        onChange={onChange}
        slotProps={{
          textField: {
            error: !!error,
            helperText: error?.message
          }
        }}
      />
    )}
  />
);