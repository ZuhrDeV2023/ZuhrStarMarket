import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useState } from "react";
import AdvertisingLoading from "../Loading/AdvertisingLoading/AdvertisingLoading";

export default () => {
	const [isLoading, setIsLoading] = useState(true);
	setTimeout(() => {
		setIsLoading(false);
	}, 1000);
	
	return (
		<div className="container mx-auto mt-5 cursor-pointer px-28">
			{isLoading ? (
				<AdvertisingLoading />
			) : (
				<Swiper modules={[Navigation, Pagination, A11y, Autoplay]} slidesPerView={1} navigation agination={{ clickable: true }} autoplay={{ delay: 2000 }} >
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg9a5nfhj8j9g69a2r60/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />					
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg9a74ng49devoaaomeg/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />					
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg9a8kfhj8j9g69a2rng/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg7c9snhgiov1qieb7qg/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />					
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cfv22a7hgiov1qid9m10/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />					
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg091pnhj8j9g698sra0/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg7c81vg49devoaaf0ig/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg7hqbfhj8j9g699qoa0/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cehgelqvtie1lhbf9upg/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cfpkiung49devoa8mdcg/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />					
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg3c2bnhgiov1qidqlj0/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />					
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg5ftsvhgiov1qie3k6g/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />					
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg9a5nfhj8j9g69a2r60/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg9a74ng49devoaaomeg/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg9a8kfhj8j9g69a2rng/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg7c9snhgiov1qieb7qg/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						  <img data-v-babd6ef6="" src="https://images.uzum.uz/cg091pnhj8j9g698sra0/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg7c81vg49devoaaf0ig/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cg7hqbfhj8j9g699qoa0/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cehgelqvtie1lhbf9upg/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
					<SwiperSlide>
						<img data-v-babd6ef6="" src="https://images.uzum.uz/cfpkiung49devoa8mdcg/main_page_banner.jpg" alt="Акции, подборки товаров и новости Uzum" />
					</SwiperSlide>
				</Swiper>
			)}
		</div>
	);
};	