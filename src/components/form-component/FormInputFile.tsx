import { Controller } from "react-hook-form";
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from "@mui/material";
import { FormInputProps } from "./FormInputProps";

export const FormInputFile = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange },
        fieldState: { error },
      }) => (
        <FormControl variant="outlined" fullWidth error={!!error}>
          <OutlinedInput
            id={name}
            type="file"
            onChange={(e) => onChange((e.target as HTMLInputElement).files)}
            inputProps={{ accept: 'image/*' }}
          />
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
