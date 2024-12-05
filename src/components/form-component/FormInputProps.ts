export interface FormInputProps {
  name: string;
  control: any;
  label: string;
}

export interface FormInputSelectProps extends FormInputProps {
  options: {
    label: string;
    value: string;
  }[];
}

export interface FormInputRadioProps extends FormInputSelectProps {}

export interface FormInputSliderProps extends FormInputProps {
  min: number;
  max: number;
  step?: number;
}

export interface FormInputAutocompleteProps extends FormInputSelectProps {}

export interface FormInputFileProps extends FormInputProps {}

export interface FormInputDatePickerProps extends FormInputProps {}

export interface FormInputTimePickerProps extends FormInputProps {}
