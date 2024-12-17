import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import AppLayOut from "./components/layout/AppLayout";
import { getThemeConfig } from "./config/theme.configs";
import { useAppSelector } from "./hook/hook";
import routes from "./router/router";
import { ThemeProvider } from "@mui/material";
import themeMuiConfigs from "./config/theme-mui.configs";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
export default function App() {
	const { theme } = useAppSelector((state) => state.theme);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<ConfigProvider theme={getThemeConfig.custom(theme)}>
				<ThemeProvider theme={themeMuiConfigs.custom({ mode: 'light' })}>
					<ToastContainer
						position="bottom-left"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						pauseOnFocusLoss
						pauseOnHover
						theme={theme}
					/>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<AppLayOut />}>
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
					</BrowserRouter>
				</ThemeProvider>
			</ConfigProvider>
		</LocalizationProvider>
	);
}
