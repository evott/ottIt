import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


const Home = () => {
    const [books, setBooks] = useState([]);


    return (
        <div className="container mx-auto p-6">
        <Swiper className="styles.mainSwiper flex-auto"
                 modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow, Pagination]}
                 effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    blur:true,
                }}
                 spaceBetween={30}
                 loop={true}
                 pagination={true}
                 speed={400}
                 autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
            <SwiperSlide className="shadow-xl"><img src="https://ifh.cc/g/xDrpN5.jpg"/></SwiperSlide>
            <SwiperSlide className="shadow-xl"><img src="https://ifh.cc/g/H6nDSb.jpg"/></SwiperSlide>
            <SwiperSlide className="shadow-xl"><img src="https://ifh.cc/g/9lpjrr.jpg"/></SwiperSlide>
        </Swiper>
        </div>
    )
}
export default Home;