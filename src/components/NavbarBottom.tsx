import React from "react";
import home from "../assets/home.svg";
import profile from "../assets/profile.svg";
import setting from "../assets/setting.svg";
import { useNavigate } from "react-router-dom";

function NavbarBottom() {
	const navigate = useNavigate();
	return (
		<div className="relative">
			<div className="bg-white rounded-lg shadow-xl p-3 w-[337px] fixed left-1/2 right-1/2 -translate-x-1/2 bottom-2 flex space-x-4 justify-between items-center">
				<div
					className="flex items-center gap-2 rounded-lg p-3 bg-gradient-to-l from-[#e14e83e6] to-[#EB982F] cursor-pointer"
					onClick={() => navigate("/")}>
					<img src={home} alt="" />
					<h2 className="text-white text-sm font-medium">Home</h2>
				</div>
				<div className="cursor-pointer" onClick={() => navigate("/profile")}>
					<img src={profile} alt="" />
				</div>
				<div className="cursor-pointer" onClick={() => navigate("/setting")}>
					<img src={setting} alt="" />
				</div>
			</div>
		</div>
	);
}

export default NavbarBottom;
