import React from "react";

type Props = {
	title: string;
	desc: string;
	amount: number;
};

function Card({ title, desc, amount }: Props) {
	return (
		<div className="px-3 py-4 bg-[#FFFCF5] rounded-[13px] grow mb-3">
			<h2 className="text-[10px] font-semibold leading-[12px]">{title}</h2>
			<p className="text-[8px] font-normal leading-[10px]">{desc}</p>
			<h2 className="text-[34px] font-medium leading-[42px] text-center py-3">
				{amount}
			</h2>
		</div>
	);
}

export default Card;
