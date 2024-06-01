import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay} from "swiper";




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';



const BookSwiper = () => {
    return (
        <>
            <Swiper
                effect={'fade'}
                grabCursor={true}
                centeredSlides={true}
                modules={[Pagination, Navigation]}
                className="styles.mainSwiper"
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                fadeEffect={{

                }}
            >
                <SwiperSlide className="artboard phone-2 "><img src="https://ifh.cc/g/qZPAYG.jpg"/></SwiperSlide>
                <SwiperSlide className="artboard phone-2 "><img src="https://ifh.cc/g/qZPAYG.jpg"/></SwiperSlide>
                <SwiperSlide className="artboard phone-2 "><img src="https://ifh.cc/g/qZPAYG.jpg"/></SwiperSlide>
            </Swiper>
        </>
);
}

export default BookSwiper;