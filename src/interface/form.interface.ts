import { Rule } from "antd/es/form";
import { tInputType } from "../types/common.type";
import { IOption } from "./general.interface";

export interface IFormLogin {
	example: string;
	exampleRequired: string;
	email: string;
	password: string;
}

export interface FieldConfig<T = string> {
  name: T;
  label: string;
  type: tInputType;
  options?: IOption[];
  rules?: Rule[];
  disable?: boolean;
  className?: string;
  dependencies?: Array<string>;
  placeHolder?: string;
  showtime?: boolean;
  format?: string
  suffix?: string,
  addonAfter?: string,
  formatter?: boolean,
  parser?: boolean,
}
