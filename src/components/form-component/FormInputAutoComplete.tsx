import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { IFormInputAutocompleteProps } from "./FormInputProps";

export const FormInputAutocomplete = <TValue, TLabel>({
	control,
	name,
	options,
	getOptionLabel,
	label,
	...props
}: IFormInputAutocompleteProps<TValue, TLabel>) => (
	<Controller
		name={name}
		control={control}
		render={({ field: { onChange, value }, fieldState: { error } }) => (
			<Autocomplete
				{...props}
				options={options}
				getOptionLabel={getOptionLabel}
				onChange={(_, data) => onChange(data)}
				renderInput={(params) => (
					<TextField
						{...params}
						label={label}
						helperText={error ? error.message : null}
						error={!!error}
					/>
				)}
			/>
		)}
	/>
);
