import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AppLayOut from "./components/layout/AppLayout";
import routes from "./router/router";
import Dashboard from "./pages/Dashboard";

export default function App() {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
}
