import { ConfigProvider } from "antd";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AppLayOut from "./components/layout/AppLayout";
import { getThemeConfig } from "./config/theme.configs";
import { useAppSelector } from "./hook/hook";
import Dashboard from "./pages/dashboard/Dashboard";
import routes from "./router/router";
import i18n from "./translation/i18n";

export default function App() {
	const { theme } = useAppSelector((state) => state.theme);

	return (
		<BrowserRouter>
			<ConfigProvider theme={getThemeConfig.custom(theme)}>
					<Routes>
						<Route path="/" element={<AppLayOut />}>
							<Route index element={<Dashboard />} />

							{routes.map((route, index) =>
								route.index ? (
									<Route index key={index} element={route.element} path={route.path} />
								) : (
									<Route
										index={route.index}
										path={route.path}
										key={index}
										element={route.element}
									/>
								)
							)}
						</Route>
					</Routes>
			</ConfigProvider>
		</BrowserRouter>
	);
}
