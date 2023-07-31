import makanan from "../assets/makanan.svg";
import olahraga from "../assets/olahraga.svg";
function News() {
	return (
		<div>
			<h2 className="text-base font-semibold leading-[20px] mb-3">
				Berita Terbaru
			</h2>
			<div className="flex space-x-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
				<div
					className="rounded-[20px] bg-no-repeat h-[148px] w-[204px] flex flex-shrink-0 items-end p-4"
					style={{ backgroundImage: `url('${makanan}')` }}>
					<h2 className="text-[18px] font-semibold leading-[22px] text-white">
						Makanan sehat cocok untuk gym
					</h2>
				</div>
				<div
					className="rounded-[20px] bg-no-repeat h-[148px] w-[204px] flex flex-shrink-0 items-end p-4"
					style={{ backgroundImage: `url('${olahraga}')` }}>
					<h2 className="text-[18px] font-semibold leading-[22px] text-white">
						Makanan sehat cocok untuk gym
					</h2>
				</div>
			</div>
		</div>
	);
}

export default News;
