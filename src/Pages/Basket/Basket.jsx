import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Components/Layout/Layout";

import likeIcon from "../../Assets/like.png";
import basketIcon from "../../Assets/basket.png";
import { add, remove } from "../../Redux/slicers/likeSlicer";
import { Link } from "react-router-dom";
import { addBasket, removeBasket } from "../../Redux/slicers/basketSlicer";

const Basket = () => {
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
		} 
		
		else {
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
		} 
		
		else {
			dispatch(removeBasket(product));
		}
	};

	return (
		<Layout>
			<div className="container mx-auto mt-10 px-28">
				<div className="flex items-center justify-between mb-4 cursor-pointer">
					<h1 className="text-xl font-medium ">Products in the basket</h1>
					<button className="px-16 py-2 text-xs font-medium border rounded-lg border-violet-600">
						Popular
					</button>
				</div>
				<hr className="mb-5" />
				<div className="flex flex-row flex-wrap justify-start gap-3 ">
					{basket.map((element) => (
						<div
							key={element.id}
							className="relative w-48 mb-10 duration-300 ease-in-out bg-white rounded-lg cursor-pointer hover:drop-shadow-md h-96"
						>
							<div>
								<Link to={"/single/" + element.id}>
									<img className="w-48 p-0 rounded h-60" src={element.images} alt="img" />
								</Link>
								<img
									onClick={() => likeHandler(element)}
									className="absolute w-4 duration-200 ease-in-out right-3 top-3 hover:w-5"
									src={likeIcon}
									alt=""
								/>
							</div>

							<div className="p-3 w-50">
								<p className="text-xs font-medium">{element.title}</p>
								<div className="flex items-center justify-between">
									<Link to={"/single/" + element.id}>
										<div>
											<p className="mt-1 text-xs rounded-lg">{element.description}</p>
											<p className="mt-2 text-xs">
												<span className="bg-yellow-400">
													{element.price} 0 soum		
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
			</div>
		</Layout>
	);
};

export default Basket;