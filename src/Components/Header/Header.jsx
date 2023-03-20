import React from "react";

import uzumLogo from "../../Assets/logo.svg";
import catalogIcon from "../../Assets/Catalog.png";
import userIcon from "../../Assets/user.png";
import likeIcon from "../../Assets/like.png";
import basketIcon from "../../Assets/basket.png";
import searchIcon from "../../Assets/search.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
	const { like } = useSelector((state) => state.like);
	const { basket } = useSelector((state) => state.basket);

	return (
		<div className="container flex items-center justify-between mx-auto px-28">
			<Link to={"/"}>
				<img className="py-4 mr-4 cursor-pointer" src={uzumLogo} alt="" />
			</Link>
			<div className="flex items-center">
				<div className="flex items-center px-4 py-2 mr-2 rounded-sm cursor-pointer btn-Catalog bg-violet-100 hover:bg-violet-200">
					<img className="w-4 mx-2" src={catalogIcon} alt="" />
					<p className="ml-1 text-xs font-medium text-violet-700">Catalog</p>
				</div>
				<input
					className="py-1 pl-3 text-sm border-2 border-solid rounded-sm border-zinc-200 w-96"
					type="text"
					placeholder="Search products and categories"
				/>
				<button className="py-2 pl-3 pr-3 bg-[#F8F8F8]">
					<img className="w-[14px] h-[14px]" src={searchIcon} alt="" />
				</button>
			</div>

			<div className="flex items-center justify-between gap-2 text-xs">
				<Link to={"/login"}>
					<div className="flex items-center cursor-pointer hover:bg-zinc-200 px-2 py-1.5 rounded gap-1 font-medium">
						<img className="w-5" src={userIcon} alt="" />
						<p>Enter</p>
					</div>
				</Link>

				<Link to="liked">
					<div className="flex items-center gap-1 px-2 py-2 font-medium rounded cursor-pointer hover:bg-zinc-200">
						<img className="w-4 mt-0.5" src={likeIcon} alt="" />
						<p className=" text-violet-600">{like.length}</p>
						<p>Sorted</p>
					</div>
				</Link>

				<Link to="/basket">
					<div className="flex items-center gap-1 px-2 py-2 font-medium rounded cursor-pointer hover:bg-zinc-200">
						<img className="w-4" src={basketIcon} alt="" />
						<p className=" text-violet-600">{basket.length}</p>
						<p>Basket</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
