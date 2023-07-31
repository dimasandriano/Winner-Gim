import React from "react";
import barbel from "../assets/barbel.svg";

function BannerGym() {
	return (
		<div className="flex bg-[#FFFCF5] px-3 items-center rounded-[13px] mb-3">
			<div>
				<h2 className="text-lg font-semibold leading-[22px]">Winner Gym</h2>
				<p className="text-xs font-normal leading-[14px]">
					Lorem ipsum dolor sit amet. Ad consequatur maiores quo aperiam voluptas et
					quasi nobis in delectus reiciendis quo labore nisi quo amet asperiores.
				</p>
			</div>
			<img src={barbel} alt="" className="w-[157px] h-[157px]" />
		</div>
	);
}

export default BannerGym;
