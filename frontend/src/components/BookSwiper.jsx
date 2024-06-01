import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectCards } from "swiper";




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';



const BookSwiper = () => {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                centeredSlides={true}
                modules={[EffectCards, Pagination]}
                className="styles.mainSwiper"
                pagination={true}
            >
                <SwiperSlide><img className="object-fill" src="https://ifh.cc/g/qZPAYG.jpg"/></SwiperSlide>
                <SwiperSlide><img className="object-fill" src="https://ifh.cc/g/qZPAYG.jpg"/></SwiperSlide>
                <SwiperSlide><img className="object-fill" src="https://ifh.cc/g/qZPAYG.jpg"/></SwiperSlide>
            </Swiper>
        </>
);
}

export default BookSwiper;