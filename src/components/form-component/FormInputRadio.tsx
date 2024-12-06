import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { IFormInputRadioProps } from "./FormInputProps";

export const FormInputRadio: FC<IFormInputRadioProps> = ({
  control,
  name,
  options,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <RadioGroup
        {...props}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    )}
  />
);
