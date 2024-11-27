import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const AppLayOut: React.FC = () => {
	return (
		<>
			<Header></Header>
			<div style={{ minHeight: "60svh" }}>
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</>
	);
};

export default AppLayOut;
