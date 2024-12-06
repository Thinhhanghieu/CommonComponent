import { FormControl, FormHelperText, OutlinedInput } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { IFormInputFileProps } from "./FormInputProps";

export const FormInputFile: FC<IFormInputFileProps> = ({
  control,
  name,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange }, fieldState: { error } }) => (
      <FormControl error={!!error} fullWidth>
        <OutlinedInput
          {...props}
          type="file"
          onChange={(e) => onChange((e.target as HTMLInputElement).files?.[0])}
        />
        {error && <FormHelperText>{error.message}</FormHelperText>}
      </FormControl>
    )}
  />
);