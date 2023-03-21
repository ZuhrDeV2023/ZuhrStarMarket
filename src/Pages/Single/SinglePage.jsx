import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import starIcon from "../../Assets/star.avif";
import likeIcon from "../../Assets/like.png";
import plusIcon from "../../Assets/plus.png";
import minusIcon from "../../Assets/minus.png";
import vectorIcon from "../../Assets/right.png";
import basketIcon from "../../Assets/basket.png";

import { BASE_URL } from "../../API/BASE_URL";
import { countPriceActions } from "../../Redux/slicers/counterPriceSlicer";
import Layout from "../../Components/Layout/Layout";

const SinglePage = () => {
	const { id } = useParams();

	const [product, setProduct] = useState({});
	const [isError, setIsError] = useState(false);

	const [price, setPrice] = useState();

	const { counterPrice } = useSelector((store) => store);
	const dispatch = useDispatch();

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch(BASE_URL + "products/" + id);

				if (res.status === 500) {
					throw new Error("Malumot topilmadi");
				}

				const data = await res.json();

				setProduct(data);

				setPrice(data.price);
			} catch {
				setIsError(true);
			}
		};
		getData();
	}, [id]);

	const incrementHandler = () => {
		dispatch(countPriceActions.increment());
		setPrice(price + product.price);
	};
	const decrementHandler = () => {
		if (counterPrice.countPrice > 1) {
			dispatch(countPriceActions.decrement());
			setPrice(price - product.price);
		}
	};

	return (
		<Layout>
			{!isError ? (
				<div className="container flex items-start mx-auto mt-10 px-28">
					<div className="w-1/3 mr-20 h-96">
						<Swiper
							modules={[Navigation, Pagination, A11y]}
							slidesPerView={1}
							navigation
							pagination={{ clickable: true }}
						>
							<SwiperSlide>
								<img className="w-full mr-20 h-96" src={product.images} alt="" />
							</SwiperSlide>
							<SwiperSlide>
								<img
									className="w-full mr-20 h-96"
									src=" https://api.lorem.space/image/watch?w=640&h=480&r=5274,https://api.lorem.space/image/watch?w=640&h=480&r=9902,https://api.lorem.space/image/watch?w=640&h=480&r=6548"
									alt=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									className="w-full mr-20 h-96"
									src="	https://api.lorem.space/image/furniture?w=640&h=480&r=6761,https://api.lorem.space/image/furniture?w=640&h=480&r=8696,https://api.lorem.space/image/furniture?w=640&h=480&r=5604"
									alt=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									className="w-full mr-20 h-96"
									src="	https://api.lorem.space/image/shoes?w=640&h=480&r=7886,https://api.lorem.space/image/shoes?w=640&h=480&r=8458,https://api.lorem.space/image/shoes?w=640&h=480&r=9983"
									alt=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									className="w-full mr-20 h-96"
									src="	https://api.lorem.space/image/furniture?w=640&h=480&r=2145,https://api.lorem.space/image/furniture?w=640&h=480&r=1544,https://api.lorem.space/image/furniture?w=640&h=480&r=5859"
									alt=""
								/>
							</SwiperSlide>
						</Swiper>
					</div>

					<div className="container w-full pr-10 mx-auto">
						<div className="flex items-center justify-between text-xs text-zinc-500">
							<div className="flex items-center">
								<img className="w-5" src={starIcon} alt="" />
								<p>5.0(11 price)</p>
								<p className="ml-8 cursor-pointer">More than 100 orders</p>
							</div>

							<div className="flex items-center gap-1 cursor-pointer">
								<img className="w-3 mt-0.5 ease-out duration-300" src={likeIcon} alt="" />
								<p>To desires</p>
							</div>
						</div>

						<div className="mt-5 text-xs">
							<h1 className="text-lg font-medium">{product.title}</h1>
							<div className="flex items-center gap-20 mt-2">
								<p>Vendor:</p>
								<p>ZuhriddinBek</p>
							</div>

							<div className="flex items-center mt-2 gap-11">
								<p>Delivery:</p>
								<p>1 day free</p>
							</div>
						</div>

						<hr className="mt-5" />

						<div className="text-xs">
							<p>Quantity:</p>
							<div className="flex items-center justify-between w-24 px-2 py-1 mt-2 border border-zinc-300">
								<button onClick={decrementHandler}>
									<img className="w-5" src={minusIcon} alt="" />
								</button>
								<p>{counterPrice.countPrice}</p>
								<button onClick={incrementHandler}>
									<img className="w-5" src={plusIcon} alt="" />
								</button>
							</div>
						</div>

						<div className="mt-4">
							<p className="text-xs">Price:</p>
							<div className="flex items-center gap-6">
								<h1 className="font-medium text-normal">{product.price + Number(price)} 0 so'm</h1>
								<p className="text-xs line-through">5523 000 so'm</p>
							</div>
						</div>

						<div className="flex items-center justify-between px-3 py-5 mt-3 rounded-lg cursor-pointer bg-violet-100">
							<p className="text-sm">
								<span className="bg-yellow-300 px-2 py-0.5 text-xs rounded font-medium">
								Per month 5 600 so'mdan
								</span>
								term payment
							</p>
							<img className="w-4" src={vectorIcon} alt="" />
						</div>
						<div className="flex items-center justify-between gap-3 mt-5 text-sm font-medium">
							<button className="w-full py-2 text-white rounded-lg bg-violet-600">
								Add to cart
							</button>
							<button className="w-full py-2 text-indigo-800 border rounded-lg border-violet-600">
								Shopping in 1 click of a button
							</button>
						</div>
						<div className="flex text-xs mt-5 bg-yellow-200 py-1.5 font-medium gap-0.5 px-10 rounded-lg items-center ">
							<img className="w-4" src={basketIcon} alt="" />
							<p>847 people bought this week</p>
						</div>
					</div>
				</div>
			) : (
				<div className="mt-20 text-center px-28">
					<p className="text-lg font-medium text-white rounded bg-violet-500">
						Something went wrong, please try again!
					</p>
				</div>
			)}
		</Layout>
	);
};

export default SinglePage;