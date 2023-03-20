import React from "react";

import locationIcon from "../../../Assets/location-icon.png";

const TopHeader = () => {
	return (
		<div className="box-Navs w-100 bg-zinc-100">
			<div className="container flex items-center justify-between py-1 mx-auto bg-zinc-100 px-28">
				<div className="flex items-center gap-2 text-xs text-zinc-700">
					<div className="flex items-center gap-1">
						<img className="w-3 h-3" src={locationIcon} alt="" />
						<p className="cursor-pointer">City: </p>
					</div>
					<select className="pl-1 mr-2 font-medium cursor-pointer">
						<option value="Tashkent">Tashkent</option>
						<option value="Nukus">Nukus</option>
						<option value="Samarqand">Samarqand</option>
						<option value="Termiz">Termiz</option>
						<option value="Jizax">Jizax</option>
						<option value="Sirdaryo">Sirdaryo</option>
						<option value="Namangan">Namangan</option>
						<option value="Farg'ona">Farg'ona</option>
						<option value="Qo'qon">Qo'qon</option>
						<option value="Navoiy">Navoiy</option>
						<option value="Buxoro">Buxoro</option>
					</select>
					<p className="">Tashkent</p>
					<p className="font-medium cursor-pointer">Delivery points</p>
				</div>

				<div className="text-xs cursor-default text-zinc-500">
					<p>We deliver your order for free in 1 day!</p>
				</div>
				<div className="flex gap-3 text-xs font-medium text-zinc-500">
					<p className="cursor-pointer hover:text-black">Questions and Answers</p>
					<p className="cursor-pointer hover:text-black">My orders</p>

					<select className="flex items-center w-100">
						<option value="English">
							<p className="cursor-pointer hover:text-black">English</p>
						</option>
						<option value="Uz">
							<p className="cursor-pointer hover:text-black">O'zbek</p>
						</option><option value="Russian">
							<p className="cursor-pointer hover:text-black">Русский</p>
						</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
