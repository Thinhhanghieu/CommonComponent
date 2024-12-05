import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputText } from "../form-component/FormInputText";
import { FormInputSelect } from "../form-component/FormInputSelect";
import { FormInputCheckbox } from "../form-component/FormInputCheckBox";
import { FormInputRadio } from "../form-component/FormInputRadio";
import { FormInputSwitch } from "../form-component/FormInputSwitch";
import { FormInputTextArea } from "../form-component/FormInputTextArea";
import { Button } from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputAutocomplete } from "../form-component/FormInputAutoComplete";
import { FormInputDatePicker } from "../form-component/FormInputDatePicker";
import { FormInputTimePicker } from "../form-component/FormInputTimePicker";
import { FormInputFile } from "../form-component/FormInputFile";

const options = [
	{ label: "Option 1", value: "1" },
	{ label: "Option 2", value: "2" },
];

const radioOptions = [
	{ label: "Radio 1", value: "1" },
	{ label: "Radio 2", value: "2" },
];

const autocompleteOptions = [
	{ label: "Auto 1", value: "1" },
	{ label: "Auto 2", value: "2" },
];

export const validationSchema = Yup.object().shape({
	text: Yup.string().required("Text is required"),
	select: Yup.string().required("Select is required"),
	checkbox: Yup.boolean().oneOf([true], "Checkbox is required"),
	radio: Yup.string().required("Radio is required"),
	switch: Yup.boolean().required("Switch is required"),
	slider: Yup.number()
		.min(10, "Slider must be at least 10")
		.max(90, "Slider must be at most 90"),
	textarea: Yup.string().required("Text Area is required"),
	autocomplete: Yup.object().required("Autocomplete is required"),
	datepicker: Yup.date().required("Date Picker is required"),
	timepicker: Yup.mixed().required("Time Picker is required"),
	file: Yup.mixed().required("File is required"),
});
type tForm = Yup.InferType<typeof validationSchema>;
const FormMui = () => {
	const { handleSubmit, control } = useForm<tForm>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit: SubmitHandler<tForm> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormInputText name="text" control={control} label="Text Input" />
			<FormInputSelect
				name="select"
				control={control}
				label="Select Input"
				options={options}
			/>
			<FormInputCheckbox name="checkbox" control={control} label="Checkbox Input" />
			<FormInputRadio
				name="radio"
				control={control}
				label="Radio Input"
				options={radioOptions}
			/>
			<FormInputSwitch name="switch" control={control} label="Switch Input" />
			<FormInputTextArea name="textarea" control={control} label="Text Area Input" />
			<FormInputAutocomplete
				name="autocomplete"
				control={control}
				label="Autocomplete Input"
				options={autocompleteOptions}
			/>
			<FormInputDatePicker
				name="datepicker"
				control={control}
				label="Date Picker Input"
			/>
			<FormInputTimePicker
				name="timepicker"
				control={control}
				label="Time Picker Input"
			/>
			<FormInputFile name="file" control={control} label="File Input" />

			<Button type="submit" color="primary" variant="contained">
				Submit
			</Button>
		</form>
	);
};

export default FormMui;
