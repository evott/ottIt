import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import Bookbox from "../components/Bookbox.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


const Home = () => {
    const [img, setImg] = useState("");

    return (
        <div className="container mx-auto p-8">  {/*슬라이더 박스*/}
            <div className="container flex-auto p-6 shadow-xl rounded-xl">
            <Swiper className="styles.mainSwiper flex-auto rounded-xl"
                    modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
                    effect={"coverflow"}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    spaceBetween={30}
                    loop={true}
                    pagination={true}
                    speed={400}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
            >
                <SwiperSlide className="shadow-xl rounded-xl"><img
                    className="transform transition-transform duration-300 hover:scale-105"
                    src="https://ifh.cc/g/xDrpN5.jpg"/></SwiperSlide>
                <SwiperSlide className="shadow-xl rounded-xl"><img
                    className="transform transition-transform duration-300 hover:scale-105"
                    src="https://ifh.cc/g/H6nDSb.jpg"/></SwiperSlide>
                <SwiperSlide className="shadow-xl rounded-xl"><img
                    className="transform transition-transform duration-300 hover:scale-105"
                    src="https://ifh.cc/g/9lpjrr.jpg"/></SwiperSlide>
            </Swiper>
            </div>
        <Bookbox></Bookbox>

        </div>
    )
}

export default Home;