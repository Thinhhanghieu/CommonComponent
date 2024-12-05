import { Controller } from "react-hook-form";
import { FormInputRadioProps } from "./FormInputProps";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const FormInputRadio = ({ name, control, label, options }: FormInputRadioProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <FormControl component="fieldset" error={!!error}>
          <FormLabel component="legend">{label}</FormLabel>
          <RadioGroup value={value} onChange={onChange}>
            {options.map((option) => (
              <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
            ))}
          </RadioGroup>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
