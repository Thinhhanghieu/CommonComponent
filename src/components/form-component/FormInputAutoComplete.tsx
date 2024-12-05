import React from "react";
import { Controller } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { FormInputAutocompleteProps } from "./FormInputProps";

export const FormInputAutocomplete = ({ name, control, label, options }: FormInputAutocompleteProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <Autocomplete
          options={options}
          getOptionLabel={(option) => option.label || ""}
          onChange={(_, data) => onChange(data)}
          value={value || null}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
            />
          )}
        />
      )}
    />
  );
};
