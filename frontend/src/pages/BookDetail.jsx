import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useRecoilValue} from "recoil";
import Rating from "../components/Rating.jsx";
import BookSwiper from "../components/BookSwiper.jsx";

const BookDetail = () => {

    return (
        <div className="container mx-auto p-8 flex">
            <div className="flex-col flex h-full items-center md:w-1/3"> {/* 왼쪽 박스 */}
                <div className="h-60"></div>
                <div>
                    <p className="text-sm text-left font-semibold leading-10">이세종 저자(글) · 양희석 번역</p>
                    <p className="text-sm text-left text-neutral-500 font-medium">모도리(Modori) · 2024년 06월 02일</p>
                    <p className="flex py-4 text-left font-black text-sm">주간베스트 <p className="px-2.5 py-0.5 text-xs">국내도서
                        17위 · 인문 3위</p></p>


                </div>

            </div>
            <div className="flex-col flex items-center m-10 h-full w-full md:w-1/3 "> {/* 가운데 박스 */}
                <p className={"text-2xl font-semibold"}>기분이 태도가 되지 말자</p>
                <div className="join p-5"> {/* 책 종류 선정 */}
                    <input className="join-item btn btn-square w-32 shadow-md" type="radio" name="options" aria-label="종이책 16,920원" checked/>
                    <input className="join-item btn btn-square w-32 shadow-md" type="radio" name="options" aria-label="eBook 11,850원"/>
                </div>
                <div className="artboard phone-2 mx-auto h-full w-full shadow-lg"> {/* 이미지 부분 */}
                    <BookSwiper>
                    </BookSwiper>
                </div>
                <div className=""> {/* 글 부분 */}

                </div>
            </div>

            <div className="shadow-md flex-col w-full md:w-1/3"> {/* 오른쪽 박스 */}
                <p>d</p>

            </div>
        </div>
    )
}

export default BookDetail;