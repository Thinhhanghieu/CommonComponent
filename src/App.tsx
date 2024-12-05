import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import AppLayOut from "./components/layout/AppLayout";
import { getThemeConfig } from "./config/theme.configs";
import { useAppSelector } from "./hook/hook";
import routes from "./router/router";

export default function App() {
	const { theme } = useAppSelector((state) => state.theme);

	return (
		<ConfigProvider theme={getThemeConfig.custom(theme)}>
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
		</ConfigProvider>
	);
}
