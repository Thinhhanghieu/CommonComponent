import { Button, ConfigProvider, ButtonProps } from "antd";
import React from "react";
import { colors } from "../../config/color.configs";

const ButtonSecondary: React.FC<ButtonProps> = ({ children, ...props }) => {
	//if have dark mode, get state from redux to update color

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: colors.mainColor,
				},
			}}
		>
			<Button type="primary" {...props}>
				{children}
			</Button>
		</ConfigProvider>
	);
};

export default ButtonSecondary;
