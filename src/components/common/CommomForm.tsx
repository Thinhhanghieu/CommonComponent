import { Checkbox, DatePicker, Form, Input, InputNumber, Select, TimePicker } from "antd";
import { FormInstance } from "antd/lib/form";
import { ReactElement, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { FieldConfig } from "../../interface/form.interface";
import { FORMAT_TIME_PICKER } from "../../constants/datetime.constant";
import NumberFormat from "react-number-format";
const { Option } = Select;

interface CommonFormProps <tFormValue = Record<string, any>>{
	formItem: FieldConfig[];
	onSubmit?: (values: tFormValue) => void;
	formInstance: FormInstance<tFormValue>;
	formOutside?: boolean;
	children?: ReactNode;
}

function CommonForm<T = any>(props: CommonFormProps<T>): ReactElement {
    const { t } = useTranslation();

	const { onSubmit, formItem, formInstance, formOutside, children } = props;

	const onFinish = (values: T) => {
		onSubmit && onSubmit(values);
	};

	const renderFormItem = (field: FieldConfig) => {
		const {
			type,
			name,
			label,
			options,
			rules,
			disable = false,
			dependencies,
			placeHolder = '',
			className,
			showtime = false,
			addonAfter,
			formatter = false,
			parser = false,
		} = field;

		const formatValue = (value: string | number | undefined) => {
			if (!value) return '';

			const numberValue = parseFloat(value.toString());
			if (isNaN(numberValue)) return '';

			return (numberValue).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		};

		const parseValue = (displayValue: string | undefined) => {
			if (!displayValue) return '';

			const cleanedValue = displayValue.replace(/,/g, '').replace(/[^0-9.]/g, '');
			return (parseFloat(cleanedValue)).toString();
		};

		switch (type) {
			case "select":
				return (
					<Form.Item
						key={name}
						name={name}
						label={t(label)}
						rules={rules}
						dependencies={dependencies}
					>
						<Select
							className={className}
							disabled={disable}
							placeholder={t(placeHolder)}
						>
							{options &&
								options.map((opt) => (
									<Option key={opt.value} value={opt.value}>
										{t(opt.label)}
									</Option>
								))}
						</Select>
					</Form.Item>
				);
			case "input":
				return (
					<Form.Item
						key={name}
						name={name}
						label={t(label)}
						rules={rules}
						dependencies={dependencies}
					>
						<Input
							className={className}
							disabled={disable}
							placeholder={t(placeHolder)}
						/>
					</Form.Item>
				);
			case "inputPassword":
				return (
						<Form.Item
							key={name}
							name={name}
							label={t(label)}
							rules={rules}
							dependencies={dependencies}
						>
							<Input.Password
								className={className}
								disabled={disable}
								placeholder={t(placeHolder)}
							/>
						</Form.Item>
				);
			case "numberFormat":
				return (
					<Form.Item
						key={name}
						name={name}
						label={t(label)}
						rules={rules}
						dependencies={dependencies}
					>
						<NumberFormat
							type="text"
							className="ant-input ant-input-outlined"
							decimalScale={4}
							disabled={disable}
							placeholder={t(placeHolder)}
						/>
					</Form.Item>
				);
			case "checkbox":
				return (
					<Form.Item
						key={name}
						name={name}
						label={t(label)}
						rules={rules}
						dependencies={dependencies}
						valuePropName="checked"
					>
						<Checkbox
								className={className}
								key={label}
								value={false}
								disabled={disable}
						/>
					</Form.Item>
				);
			case "timePicker":
				return (
					<Form.Item
						key={name}
						name={name}
						label={t(label)}
						rules={rules}
						dependencies={dependencies}
					>
						<TimePicker
							className="w-100"
							format={FORMAT_TIME_PICKER}
							disabled={disable}
							placeholder={t(placeHolder)}
						/>
					</Form.Item>
				);
			case "datePicker":
				return (
					<Form.Item
						key={name}
						name={name}
						label={t(label)}
						rules={rules}
						dependencies={dependencies}>
						<DatePicker
							showTime={showtime}
							className="w-100"
							disabled={disable}
							placeholder={t(placeHolder)}
						/>
					</Form.Item>
				);
			case "monthPicker":
				return (
					<Form.Item
						key={name}
						name={name}
						label={t(label)}
						rules={rules}
						dependencies={dependencies}>
						<DatePicker
							className="w-100"
							disabled={disable}
							placeholder={t(placeHolder)}
							picker="month"
						/>
					</Form.Item>
				);
				case "inputNumber":
					return (
						<Form.Item
							key={name}
							name={name}
							label={t(label)}
							rules={rules}
							dependencies={dependencies}
						>
							<InputNumber
								className="w-100"
								disabled={disable}
								placeholder={t(placeHolder)}
								addonAfter={addonAfter}
								controls={false}
								formatter={formatter ? formatValue : undefined}
								parser={parser ? parseValue : undefined}
								stringMode={false}
							/>
						</Form.Item>
				);
			case "textArea":
				return (
					<Form.Item
						key={name}
						name={name}
						label={t(label)}
						rules={rules}
						dependencies={dependencies}>
						<Input.TextArea
							className="w-100"
							disabled={disable}
							placeholder={t(placeHolder)}
							autoSize={{ minRows: 2, maxRows: 6 }}
						/>
					</Form.Item>
				);
			default:
				return null;
			//         Todo more type
		}
	};
	if (formOutside) {
		return (
			<>
				{formItem.map((field) => renderFormItem(field))}
				{children}
			</>
		);
	}
	return (
		<Form
			form={formInstance}
			name="common_form"
			labelAlign="left"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 18 }}
			colon={false}
			onFinish={onFinish}
		>
			{formItem.map((field) => renderFormItem(field))}
			{children}
		</Form>
	);
};

export default CommonForm;
