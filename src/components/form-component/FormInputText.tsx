import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IFormInputProps } from "./FormInputProps";
import { FC } from "react";

export const FormInputText: FC<IFormInputProps> = ({
  control,
  name,
  ...props
}) => (
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
        fullWidth
      />
    )}
  />
);