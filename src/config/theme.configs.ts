import { ThemeConfig, theme } from "antd";
import { colors } from "./color.configs";

const themeModes = {
	light: "light",
	dark: "dark",
};

type tCustomThemeConfig = {
	custom: (mode: string) => ThemeConfig;
};

export const getThemeConfig: tCustomThemeConfig = {
	custom: (mode: string): ThemeConfig => {
		const modeTheme: ThemeConfig =
			mode === themeModes.light
				? {
						token: {
							colorPrimary: colors.mainColor,
							colorTextBase: colors.black,
							fontFamily:"Montserrat"
						},
						components: {
							Input: {
								algorithm: true,
							},
						},
						algorithm: theme.defaultAlgorithm,
				  }
				: {
						token: {
							colorPrimary: colors.darkMaincolor,
							colorTextBase: colors.white,
						},
						components: {
							Input: {
								// for update color when use darkAlgorithm
								colorBgContainer: colors.white,
								//
								colorText: colors.white,
								algorithm: false,
							},
						},
						algorithm: theme.darkAlgorithm,
				  };

		return {
			...modeTheme,
		};
	},
};
