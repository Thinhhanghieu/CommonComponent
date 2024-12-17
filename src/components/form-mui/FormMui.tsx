import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { FormInputAutocomplete } from "../form-component/FormInputAutoComplete";
import { FormInputCheckbox } from "../form-component/FormInputCheckBox";
import { FormInputDatePicker } from "../form-component/FormInputDatePicker";
import { FormInputFile } from "../form-component/FormInputFile";
import { FormInputRadio } from "../form-component/FormInputRadio";
import { FormInputSelect } from "../form-component/FormInputSelect";
import { FormInputSwitch } from "../form-component/FormInputSwitch";
import { FormInputText } from "../form-component/FormInputText";
import { FormInputTextArea } from "../form-component/FormInputTextArea";
import { FormInputTimePicker } from "../form-component/FormInputTimePicker";

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
	autocomplete: Yup.string().required("Autocomplete is required"),
	datepicker: Yup.date().required("Date Picker is required"),
	timepicker: Yup.mixed().required("Time Picker is required"),
	file: Yup.mixed().required("File is required"),
});
type tForm = Yup.InferType<typeof validationSchema>;
const FormMui = () => {
	const { handleSubmit, control } = useForm<tForm>({
		defaultValues: {
			text: "",
			select: "",
			checkbox: false,
			radio: "",
			switch: false,
			textarea: "",
			autocomplete: "",
		},
		resolver: yupResolver(validationSchema),
	});

	const onSubmit: SubmitHandler<tForm> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormInputText
				name="text"
				control={control}
				label="Example Text"
				variant="filled"
				disabled={false}
				fullWidth
			/>
			<FormInputSelect<string, string>
				name="select"
				control={control}
				label="Select Input"
				options={[
					{ label: "Option 1", value: "1" },
					{ label: "Option 2", value: "2" },
				]}
			/>
			<FormInputCheckbox name="checkbox" control={control} label="Checkbox Input" />
			<FormInputRadio name="radio" control={control} options={radioOptions} />
			<FormInputSwitch name="switch" control={control} label="Switch Input" />
			<FormInputTextArea
				name="textarea"
				control={control}
				label="Text Area Input"
				rows={4}
				variant="outlined"
			/>
			<FormInputAutocomplete<number, string>
				name="autocomplete"
				control={control}
				label="Autocomplete Input"
				options={[
					{ label: "Option 1", value: 1 },
					{ label: "Option 2", value: 2 },
				]}
				getOptionLabel={(option) => option.label}
				disabled={false}
				fullWidth
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
			<FormInputFile name="file" control={control} />
			<Button type="submit" color="primary" variant="contained">
				Submit
			</Button>
		</form>
	);
};

export default FormMui;
