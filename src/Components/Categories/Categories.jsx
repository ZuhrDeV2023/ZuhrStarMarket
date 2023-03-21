import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ElectronicsLoading from "../Loading/ElectronicsLoading/ElectronicsLoading";

// import { BASE_URL } from "../../API/BASE_URL";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import basketIcon from "../../Assets/basket.png";
import likeIcon from "../../Assets/like.png";
import rightVector from "../../Assets/right.png";
import { Link } from "react-router-dom";
import { add, remove } from "../../Redux/slicers/likeSlicer";
import { addBasket, removeBasket } from "../../Redux/slicers/basketSlicer";

export default ({ categoryName }) => {
	const [data, setData] = useState([]);
	const [category, setCategory] = useState("");
	
	const [isLoading, setIsLoading] = useState(true);

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

	useEffect(() => {
		fetch("https://api.umarket.uz" + "products/")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setCategory(categoryName);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
			});
	}, []);

	const categoryProducts = data.filter((product) => product.category.name === category);

	return (
		<div className="container mx-auto mt-5 px-28">
			<div className="flex items-center mx-auto mb-4 cursor-pointer">
				<h1 className="text-xl font-medium ">{category}</h1>
				<img className="w-3 mt-1 ml-5" src={rightVector} alt="" />
			</div>
			{isLoading ? (
				<ElectronicsLoading />
			) : (
				<Swiper
					cssMode={true}
					navigation={true}
					// pagination={true}
					mousewheel={true}
					keyboard={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="flex gap-2">
							{categoryProducts.slice(1, 6).map((element) => (
								<div
									key={element.id}
									className="container relative w-48 mx-auto mb-10 duration-300 ease-in-out bg-white rounded-lg cursor-pointer hover:drop-shadow-md h-96"
								>
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
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex gap-3 mx-auto">
							{categoryProducts.slice(6, 11).map((element) => (
								<div
									key={element.id}
									className="relative w-48 mb-10 duration-300 ease-in-out bg-white rounded-lg cursor-pointer hover:drop-shadow-md h-96"
								>
									<div>
										<Link to={"/single/" + element.id}>
											<img className="w-48 rounded h-60 " src={element.images} alt="img" />
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
														{element.price} 0 so'm
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
					</SwiperSlide>
					<SwiperSlide>
						<div className="flex gap-3 mx-auto">
							{categoryProducts.slice(11, 16).map((element) => (
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
													<p className="mt-2 text-xs">{element.price} 0 so'm</p>
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
					</SwiperSlide>
				</Swiper>
			)}
		</div>
	);
};
