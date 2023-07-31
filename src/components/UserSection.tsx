import user from "../assets/user.svg";

function UserSection() {
	return (
		<div className="flex gap-3 items-center my-3">
			<img src={user} alt="user" />
			<div>
				<h2 className="text-lg font-normal text-[#333333]">
					Welcome.. <span className="text-lg font-semibold">Ayu Candra!</span>
				</h2>
				<p className="text-[8px] text-[#828282]">Check-in terakhir 24 Mei 2022</p>
			</div>
		</div>
	);
}

export default UserSection;
