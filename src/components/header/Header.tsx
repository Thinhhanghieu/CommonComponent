import { useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";

import SwitchTheme from "../common/SwitchTheme";
import "./header.scss";
import { Space } from "antd";

const headerNav = [
	{
		display: "Home",
		path: "/",
	},
	{
		display: "Home1",
		path: "/",
	},
	{
		display: "Home2",
		path: "/",
	},
];

const Header = () => {
	const { pathname } = useLocation();
	const headerRef = useRef<HTMLDivElement>(null);

	const active = headerNav.findIndex((e) => e.path === pathname);

	useEffect(() => {
		const shrinkHeader = () => {
			if (headerRef.current) {
				if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
					headerRef.current.classList.add("shrink");
				} else {
					headerRef.current.classList.remove("shrink");
				}
			}
		};
		window.addEventListener("scroll", shrinkHeader);
		return () => {
			window.removeEventListener("scroll", shrinkHeader);
		};
	}, []);

	return (
		<div ref={headerRef} className="header">
			<div className="header__wrap container">
				<div className="logo">
					<Space>
						<Link to="/">HOME ORIGIN</Link>
						<SwitchTheme></SwitchTheme>
					</Space>
				</div>
				<ul className="header__nav">
					{headerNav.map((e, i) => (
						<li key={i} className={`${i === active ? "active" : ""}`}>
							<Link to={e.path}>{e.display}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Header;
