import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputTimePicker = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <TimePicker
          label={label}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};
