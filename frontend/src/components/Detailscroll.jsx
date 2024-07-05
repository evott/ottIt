import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Scrollbar, Navigation, Pagination} from "swiper";



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from "axios";


const Detailscroll = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;


    const swiperStyle = { // 스와이프 스타일
        width : '53rem',
        height: '20rem',
        backgroundColor: 'rgb(249 250 251)',
        borderRadius: '20px',
    };


    const slideStyle = {  // 슬라이드 스타일
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10rem',
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
        <div className="flex w-[53rem]">
            <Swiper
                scrollbar={{
                    draggable: true ,
                    hide: false,
                }}
                onSwiper={setSwiperRef}
                style={swiperStyle}
                slidesPerView={6}
                centeredSlides={false}
                spaceBetween={18}
                navigation={false}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide className="flex flex-col ml-[1.5rem] mt-[3.5rem]" style={slideStyle}>.
                    <img className="cursor-pointer" src="https://ifh.cc/g/M5dMrF.jpg"/>
                    <p className="text-black text-sm mt-[0.7rem] font-semibold">제철 행복</p>
                    <p className="text-gray-600 mt-[0.4rem] text-xs font-semibold">김신지</p>
                    <p className="ttext-black mt-[1rem] text-xs font-semibold">16,020원</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col mt-[4.4rem]" style={slideStyle}>
                    <img className="cursor-pointer" src="https://ifh.cc/g/KS6Ctm.jpg"/>
                    <p className="text-left text-black text-sm mt-[0.7rem] font-semibold">소중한 보물들</p>
                    <p className="text-left text-gray-600 mt-[0.4rem] text-xs font-semibold">이해인</p>
                    <p className="text-left text-black mt-[1rem] text-xs font-semibold">19,800원</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col mt-[5rem]" style={slideStyle}>
                    <img className="cursor-pointer" src="https://ifh.cc/g/JKZtj9.jpg"/>
                    <p className="text-left text-black text-sm ml-[0.2rem] mt-[0.7rem] font-semibold">마르지 않아도 잘 사는데요</p>
                    <p className="text-gray-600 mt-[0.4rem] text-xs font-semibold">노은솔</p>
                    <p className="ttext-black mt-[1rem] text-xs font-semibold">17,820원</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col mt-[5em]" style={slideStyle}>
                    <img className="cursor-pointer" src="https://ifh.cc/g/t0OnTG.jpg"/>
                    <p className="text-left text-black text-sm ml-[0.2rem] mt-[0.7rem] font-semibold">그럼에도 불구하고 나는 내가 좋았어</p>
                    <p className="text-gray-600 mt-[0.4rem] text-xs font-semibold">박채린</p>
                    <p className="ttext-black mt-[1rem] text-xs font-semibold">16,200원</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col mt-[4.4rem]" style={slideStyle}>
                    <img className="cursor-pointer" src="https://ifh.cc/g/qh8yvw.jpg"/>
                    <p className="text-left text-black text-sm ml-[0.2rem] mt-[0.7rem] font-semibold">블리스(BLISS)</p>
                    <p className="text-gray-600 mt-[0.4rem] text-xs font-semibold">임현정</p>
                    <p className="ttext-black mt-[1rem] text-xs font-semibold">17,100원</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col mt-[5rem]" style={slideStyle}>
                    <img className="cursor-pointer" src="https://ifh.cc/g/qDKDKX.jpg"/>
                    <p className="text-left text-black text-sm ml-[0.2rem] mt-[0.7rem] font-semibold">우리는 날마다 조금씩 행복해진다</p>
                    <p className="text-gray-600 mt-[0.4rem] text-xs font-semibold">얼미부부</p>
                    <p className="ttext-black mt-[1rem] text-xs font-semibold">15,750원</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col mt-[4.4rem]" style={slideStyle}>
                    <img className="cursor-pointer" src="https://ifh.cc/g/G4TF64.jpg"/>
                    <p className="text-left text-black text-sm ml-[0.2rem] mt-[0.7rem] font-semibold">금빛 종소리</p>
                    <p className="text-gray-600 mt-[0.4rem] text-xs font-semibold">김하나</p>
                    <p className="ttext-black mt-[1rem] text-xs font-semibold">15,300원</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col mt-[4.4rem]" style={slideStyle}>
                    <img className="cursor-pointer" src="https://ifh.cc/g/OQo7oJ.jpg"/>
                    <p className="text-left text-black text-sm ml-[0.2rem] mt-[0.7rem] font-semibold">허송세월</p>
                    <p className="text-gray-600 mt-[0.4rem] text-xs font-semibold">김훈</p>
                    <p className="ttext-black mt-[1rem] text-xs font-semibold">16,200원</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Detailscroll;