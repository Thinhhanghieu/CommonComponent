import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AppLayOut from "./components/layout/AppLayout";
import routes from "./router/router";
import Dashboard from "./pages/dashboard/Dashboard";
import { I18nextProvider } from "react-i18next";
import i18n from "./translation/i18n";

export default function App() {
	return (
		<BrowserRouter>
			<I18nextProvider i18n={i18n}>
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
			</I18nextProvider>
		</BrowserRouter>
	);
}
