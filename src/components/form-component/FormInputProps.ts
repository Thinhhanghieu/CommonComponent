import {
  TextFieldProps,
  SelectProps,
  RadioGroupProps,
  SliderProps,
  AutocompleteProps,
  InputProps,
  CheckboxProps,
  SwitchProps,
} from "@mui/material";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { TimePickerProps } from "@mui/x-date-pickers/TimePicker";
import { Control, FieldValues } from "react-hook-form";
import { IOption } from "../../interface/general.interface";
import { ReactNode } from "react";

export interface IFormInputProps extends Omit<TextFieldProps, 'name' | 'control'> {
  name: string;
  control: Control<any>;
}

export interface IFormInputSelectProps<TValue extends string | number, TLabel> extends Omit<SelectProps, 'name' | 'control'> {
  name: string;
  control: Control<any>;
  options: IOption<TValue, TLabel>[];
}

export interface IFormInputRadioProps extends Omit<RadioGroupProps, 'name' | 'control'> {
  name: string;
  control: Control<any>;
  options: {
    label: string;
    value: string;
  }[];
}

export interface IFormInputSliderProps extends Omit<SliderProps, 'name' | 'control'> {
  name: string;
  control: Control<any>;
}

export interface IFormInputAutocompleteProps<TValue, TLabel> extends Omit<AutocompleteProps<IOption<TValue, TLabel>, false, false, false>, 'name' | 'control' | 'renderInput'> {
  name: string;
  control: Control<any>;
  options: IOption<TValue, TLabel>[];
  getOptionLabel: (option: IOption<TValue, TLabel>) => string;
  label: string;
}

export interface IFormInputFileProps extends Omit<InputProps, 'name' | 'control'> {
  name: string;
  control: Control<any>;
}

export interface IFormInputDatePickerProps extends Omit<DatePickerProps<any>, 'name' | 'control'> {
  name: string;
  control: Control<any>;
}

export interface IFormInputTimePickerProps extends Omit<TimePickerProps<any>, 'name' | 'control'> {
  name: string;
  control: Control<any>;
}
export interface IFormInputCheckboxProps extends Omit<CheckboxProps, 'name' | 'control'> {
  label: string;
  name: string;
  control: Control<any>;
}

export interface IFormInputSwitchProps extends Omit<SwitchProps, 'name' | 'control'> {
  label: string;
  name: string;
  control: Control<any>;
}