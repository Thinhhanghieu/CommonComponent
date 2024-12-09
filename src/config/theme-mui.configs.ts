import { createTheme, Theme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
	dark: "dark",
	light: "light",
} as const;

type ThemeMode = keyof typeof themeModes;

interface ICustomThemeOptions {
	mode: ThemeMode;
}

const themeMuiConfigs = {
	custom: ({ mode }: ICustomThemeOptions): Theme => {
		const customPalette =
			mode === themeModes.dark
				? {
						primary: {
							main: "#ff0000",
							contrastText: "#ffffff",
						},
						secondary: {
							main: "#000",
							contrastText: "#ffffff",
						},
						background: {
							default: "#000000",
							paper: "#131313",
						},
            success: {
              main: colors.red[100],
            }
				  }
				: {
						primary: {
							main: colors.yellow[100],
						},
						secondary: {
							main: "#f44336",
						},
						background: {
							default: colors.grey[100],
						},
				  };

		return createTheme({
			palette: {
				...customPalette,
        mode,

			},
			components: {
				MuiButton: {
					defaultProps: { disableElevation: true },
				},
			},
      typography : {
				fontFamily:"Montserrat"
      }

		});
	},
};

export default themeMuiConfigs;
