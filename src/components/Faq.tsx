import React from "react";
import expandRight from "../assets/expandRight.svg";
import expandDown from "../assets/expandDown.svg";

type Props = {
	data: {
		id: number;
		title: string;
		description: string;
		createdAt: string;
		expanded: boolean;
	}[];
	toggleAccordion: (id: number) => void;
};

function Faq({ data, toggleAccordion }: Props) {
	return (
		<div className="mb-24">
			<h2 className="text-base font-semibold leading-[20px] my-3">FAQ</h2>
			{data.map((item) => (
				<div className="bg-[#FFFCF5] rounded-[13px]  px-5 py-2 mb-3" key={item.id}>
					<div
						className="flex justify-between py-3 cursor-pointer"
						onClick={() => toggleAccordion(item.id)}>
						<p className="text-xs font-bold leading-[14px]">{item.title}</p>
						{item.expanded ? (
							<img src={expandDown} alt="" />
						) : (
							<img src={expandRight} alt="" />
						)}
					</div>

					{item.expanded && (
						<p className="text-xs font-normal">{item.description}</p>
					)}
				</div>
			))}
		</div>
	);
}

export default Faq;
