import React from "react";
import UserSection from "../../components/UserSection";
import BannerGym from "../../components/BannerGym";
import Card from "../../components/Card";
import News from "../../components/News";
import Faq from "../../components/Faq";
import HomeviewModel from "./Home.viewModel";

function Home() {
	const viewModel = HomeviewModel();
	return (
		<div>
			<UserSection />
			<BannerGym />
			<div className="flex gap-2">
				<Card title="Total Kunjungan" desc="Hari ini" amount={32} />
				<Card title="Di dalam Ruangan" desc="Saat ini" amount={20} />
			</div>
			<News />
			<Faq data={viewModel.data} toggleAccordion={viewModel.toggleAccordion} />
		</div>
	);
}

export default Home;
