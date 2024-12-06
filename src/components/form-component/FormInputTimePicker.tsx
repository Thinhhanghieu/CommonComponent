import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Controller } from "react-hook-form";
import { IFormInputTimePickerProps } from "./FormInputProps";
import { FC } from "react";

export const FormInputTimePicker: FC<IFormInputTimePickerProps> = ({
  control,
  name,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <TimePicker
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
