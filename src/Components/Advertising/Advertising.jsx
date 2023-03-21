import React, { useState } from "react";
import AdvertisingLoading from "../Loading/AdvertisingLoading/AdvertisingLoading";

const Advertising = ({ image }) => {
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 2000);

	return (
		<div className="container mx-auto my-5 px-28">
			{isLoading ? (
				<AdvertisingLoading />
			) : (
				<img className="w-full rounded-lg cursor-pointer h-96" src={image} alt="" />
			)}
		</div>
	);
};

export default Advertising;