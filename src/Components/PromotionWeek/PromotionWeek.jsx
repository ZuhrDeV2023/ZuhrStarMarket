import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addBasket, removeBasket } from "../../Redux/slicers/basketSlicer";
import { add, remove } from "../../Redux/slicers/likeSlicer";

import { BASE_URL } from "../../API/BASE_URL";

import rightVector from "../../Assets/right.png";
import likeIcon from "../../Assets/like.png";
import basketIcon from "../../Assets/basket.png";

import PromotionLoading from "../../Components/Loading/PromotionLoading/PromotionLoading";


const PromotionWeek = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const [limitProduct, setLimitProduct] = useState(11);

	const { like } = useSelector((state) => state.like);
	const { basket } = useSelector((state) => state.basket);
	const dispatch = useDispatch();

	const likeHandler = (product) => {
		let hasProduct = false;

		like.forEach((element) => {
			if (element.id === product.id) {
				hasProduct = true;
			}
		});

		if (!hasProduct) {
			dispatch(add(product));
		} else {
			dispatch(remove(product));
		}
	};

	const basketHandler = (product) => {
		let hasProduct = false;

		basket.forEach((element) => {
			if (element.id === product.id) {
				hasProduct = true;
			}
		});

		if (!hasProduct) {
			dispatch(addBasket(product));
		} else {
			dispatch(removeBasket(product));
		}
	};

	useEffect(() => {
		fetch(BASE_URL + "products/")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="container mx-auto mt-10 px-28">
			<div className="flex items-center mb-4 cursor-pointer">
				<h1 className="text-xl font-medium ">Promotions of the week</h1>
				<img className="w-3 mt-1 ml-5" src={rightVector} alt="" />
			</div>
			{isLoading ? (
				<PromotionLoading />
			) : (
				<div className="container flex flex-row flex-wrap justify-between mx-auto ">
					{data.slice(1, limitProduct).map((element) => (
						<div key={element.id} className="relative w-48 mb-10 duration-300 ease-in-out bg-white rounded-lg cursor-pointer hover:drop-shadow-md h-96" >
							<div>
								<Link to={"/single/" + element.id}>
									<img className="w-48 p-0 rounded h-60" src={element.images} alt="img" />
								</Link>
								<img onClick={() => likeHandler(element)} className="absolute w-4 duration-200 ease-in-out right-3 top-3 hover:w-5" src={likeIcon} alt="" />
							</div>

							<div className="container p-3 mx-auto w-50">
								<p className="text-xs font-medium">{element.title}</p>
								<div className="flex items-center justify-between">
									<Link to={"/single/" + element.id}>
										<div>
											<p className="mt-1 text-xs rounded-lg">{element.description}</p>
											<p className="mt-2 text-xs">
												<span className="bg-yellow-400">
													{element.price} 000 so'm
												</span>
											</p>
										</div>
									</Link>
									<img
										onClick={() => basketHandler(element)}
										className="absolute w-4 duration-200 ease-in-out right-3 bottom-3 hover:w-5"
										src={basketIcon}
										alt=""
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
			<button
				onClick={() => setLimitProduct(limitProduct + 5)}
				className="block py-2 mx-auto font-medium border rounded-lg bg-zinc-100 border-zinc-200 hover:bg-zinc-50 w-96 text-zinc-700"
			>
				Show again 5 product
			</button>
		</div>
	);
};

export default PromotionWeek;
