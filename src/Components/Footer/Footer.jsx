import React from "react";

import appStoreIcon from "../../Assets/appStore.png";
import googlePlayIcon from "../../Assets/googlePlay.png";
import instaIcon from "../../Assets/instagram.png";
import telegramIcon from "../../Assets/telegram.png";
import youtubeIcon from "../../Assets/youtube.png";
import facebookIcon from "../../Assets/facebook.png";

const Footer = () => {
	return (
		<div className="mt-20 px-28">
			<div className="container flex justify-between mx-auto">
				<div>
					<p className="text-xs font-medium cursor-default">about Us</p>
					<p className="my-3 text-xs cursor-pointer">Delivery points</p>
					<p className="text-xs cursor-pointer">Vacancies</p>
				</div>
				<div>
					<p className="text-xs font-medium cursor-default">To users</p>
					<p className="my-3 text-xs cursor-pointer">Contact Us</p>
					<p className="text-xs cursor-pointer">Question and Answer</p>
				</div>
				<div>
					<p className="text-xs font-medium cursor-default">To entrepreneurs</p>
					<p className="my-3 text-xs cursor-pointer">Sell ​​on the vine</p>
					<p className="text-xs cursor-pointer">Entering the seller's office</p>
				</div>
				<div>
					<p className="text-xs font-medium cursor-default">Download the application</p>
					<div className="flex items-center gap-2">
						<img className="w-20 cursor-pointer" src={appStoreIcon} alt="" />
						<img className="w-20 mt-1 cursor-pointer" src={googlePlayIcon} alt="" />
					</div>
					<p className="text-xs font-medium cursor-default mt-7">Grapes in social networks</p>
					<div className="flex justify-between mt-4">
						<img className="cursor-pointer w-7" src={instaIcon} alt="" />
						<img className="cursor-pointer w-7" src={telegramIcon} alt="" />
						<img className="cursor-pointer w-7" src={youtubeIcon} alt="" />
						<img className="cursor-pointer w-7" src={facebookIcon} alt="" />
					</div>
				</div>
			</div>
			<hr className="mt-5" />
			<div className="flex items-center justify-between py-2">
				<div className="flex gap-2 text-xs font-medium">
					<p className="cursor-pointer">Confidentiality Agreement</p>
					<p className="cursor-pointer">User Agreement</p>
				</div>
				<p className="text-xs cursor-default">
					«2023© XK LLC «GRAPE MARKET». STIR 309376127. All rights reserved»
				</p>
			</div>
		</div>
	);
};

export default Footer;