import { useState, useEffect } from "react";

type dataFaqs = {
	id: number;
	title: string;
	description: string;
	createdAt: string;
	expanded: boolean;
};

function HomeviewModel() {
	const [data, setData] = useState<dataFaqs[]>([]);
	const fetchData = async () => {
		try {
			const api: string = process.env.REACT_APP_API_FAQS || "";
			const res = await fetch(api);
			const json = await res.json();
			setData(json.map((item: dataFaqs) => ({ ...item, expanded: false })));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const toggleAccordion = (id: number) => {
		setData((prevData: dataFaqs[]) =>
			prevData.map((item: dataFaqs) =>
				item.id === id ? { ...item, expanded: !item.expanded } : item
			)
		);
	};

	return {
		data,
		toggleAccordion,
	};
}

export default HomeviewModel;
