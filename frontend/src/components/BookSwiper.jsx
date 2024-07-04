import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay} from "swiper";



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import axios from "axios";



const BookSwiper = () => {
    const { id } = useParams(); // URL 파라미터에서 id를 가져옴

    const [BookData, setBookData] = useState({
        book_num: "",
        book_name: "",
        book_writer: "",
        book_src: "",
        book_src2: "",
        book_src3: "",
        book_price: "",
        book_dprice: ""
    });

    useEffect(() => {
        // 데이터 요청
        axios.get(`http://localhost:8080/BookDetail/${id}`)
            .then(response => {
                const data = response.data;
                setBookData({
                    book_num: data.book_num,
                    book_name: data.book_name,
                    book_writer: data.book_writer,
                    book_src: data.book_src,
                    book_src2: data.book_src2,
                    book_src3: data.book_src3,
                    book_price: data.book_price,
                    book_dprice: data.book_dprice
                });
            })
            .catch(error => {
            });
    }, [id]);

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
                <SwiperSlide className="artboard phone-2 "><img src={BookData.book_src}/></SwiperSlide>
                <SwiperSlide className="artboard phone-2 "><img src={BookData.book_src2}/></SwiperSlide>
                <SwiperSlide className="artboard phone-2 "><img src={BookData.book_src3}/></SwiperSlide>
            </Swiper>
        </>
);
}

export default BookSwiper;