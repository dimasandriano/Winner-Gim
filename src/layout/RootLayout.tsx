import React from "react";
import NavbarBottom from "../components/NavbarBottom";
import { Outlet } from "react-router-dom";

function RootLayout() {
	return (
		<div className="container px-3 max-w-[360px] mx-auto">
			<Outlet />
			<NavbarBottom />
		</div>
	);
}

export default RootLayout;
