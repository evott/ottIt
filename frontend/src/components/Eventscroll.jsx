import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Scrollbar, Navigation, Pagination} from "swiper";



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from "axios";


const Eventscroll = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;


    const swiperStyle = {
        width : '21rem',
        height: '10.5rem',
    };

    const imageStyle = {
        maxWidth: '20rem',
        maxHeight: '8.8rem',
        objectFit: 'fill',
        marginLeft: '0',
    };

    const slideStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10em'
    };

    const swiperContainerStyle = {
        marginLeft: '30px'
    };

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

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    };


    return (
        <div style={swiperContainerStyle}>
            <Swiper
                scrollbar={{ draggable: true , hide: false }}
                onSwiper={setSwiperRef}
                style={swiperStyle}
                slidesPerView={1.3}
                centeredSlides={false}
                spaceBetween={18}
                navigation={false}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide style={slideStyle}><img style={imageStyle} src="https://ifh.cc/g/njcJRt.jpg"/></SwiperSlide>
                <SwiperSlide style={slideStyle}><img style={imageStyle} src="https://ifh.cc/g/Pnh7X5.jpg"/></SwiperSlide>
                <SwiperSlide style={slideStyle}><img style={imageStyle} src="https://ifh.cc/g/nDCzYj.jpg"/></SwiperSlide>
                <SwiperSlide style={slideStyle}><img style={imageStyle} src="https://ifh.cc/g/rGndZS.jpg"/></SwiperSlide>
                <SwiperSlide style={slideStyle}><img style={imageStyle} src="https://ifh.cc/g/xpQv7N.jpg"/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Eventscroll;