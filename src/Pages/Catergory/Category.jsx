import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../API/BASE_URL";

import basketIcon from "../../Assets/basket.png";
import likeIcon from "../../Assets/like.png";

import PromotionLoading from "../../Components/Loading/PromotionLoading/PromotionLoading";
import Layout from "../../Components/Layout/Layout";
import { add, remove } from "../../Redux/slicers/likeSlicer";
import { addBasket, removeBasket } from "../../Redux/slicers/basketSlicer";

const PromotionWeek = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [limitProduct, setLimitProduct] = useState(11);

	const { like } = useSelector((state) => state.like);
	const { basket } = useSelector((state) => state.basket);

	const dispatch = useDispatch();

	const category = useSelector((state) => state.category);

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

	const filteredProducts = data.filter((product) => product.category.name === category);

	return (
		<Layout>
			<div className="container mx-auto mt-10 px-28">
				<div className="flex items-center mb-4 cursor-pointer">
					<h1 className="text-xl font-medium ">{category}</h1>
				</div>

				{isLoading ? (
					<PromotionLoading />
				) : (
					<div className="container flex flex-row flex-wrap justify-between mx-auto ">
						{filteredProducts.slice(1, limitProduct).map((element) => (
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
												<p className="mt-2 text-xs">{element.price} 0 soum</p>
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

						<button
							onClick={() => setLimitProduct(limitProduct + 5)}
							className="inline-block w-full py-2 mx-auto font-medium border rounded-lg bg-zinc-100 border-zinc-200 hover:bg-zinc-50 text-zinc-700"
						>
							Show again 5 product
						</button>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default PromotionWeek;