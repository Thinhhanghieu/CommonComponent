import { Switch } from "antd";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { setTheme, THEME } from "../../redux/features/themeSlice";
import { useEffect } from "react";
import { setLocalStorage } from "../../utils/uitls";

const SwitchTheme = () => {
	const dispatch = useAppDispatch();
	const { theme } = useAppSelector((state) => state.theme);

	useEffect(() => {
		document.querySelector("body")?.setAttribute("data-theme", theme);
		setLocalStorage("theme", theme);
	}, [theme]);

	const handleChangeMode = (checked: boolean) => {
		if (checked) {
			dispatch(setTheme(THEME.dark));
			return;
		}
		dispatch(setTheme(THEME.light));
	};

	return (
		<>
			<Switch
				checkedChildren="On"
				unCheckedChildren="Off"
				onChange={handleChangeMode}
				checked={theme === THEME.dark}
			/>
		</>
	);
};

export default SwitchTheme;
