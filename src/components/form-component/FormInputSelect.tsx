import { FormControl, FormHelperText, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";
import { IFormInputSelectProps } from "./FormInputProps";
import { ReactNode } from "react";

export const FormInputSelect = <TValue extends string | number, TLabel extends ReactNode>({
  control,
  name,
  options,
  ...props
}: IFormInputSelectProps<TValue, TLabel>) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <FormControl fullWidth error={!!error}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          {...props}
          value={value}
          onChange={onChange}
          error={!!error}
        >
          {options.map((option) => (
            <MenuItem key={option.value.toString()} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{error.message}</FormHelperText>}
      </FormControl>
    )}
  />
);

