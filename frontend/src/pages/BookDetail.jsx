import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useRecoilValue} from "recoil";
import Rating from "../components/Rating.jsx";
import BookSwiper from "../components/BookSwiper.jsx";

const BookDetail = () => {

    return (
        <div className="container mx-auto p-8 flex items-center">
            <div className="shadow-md flex-col w-full md:w-1/3"> {/* 왼쪽 박스 */}
                <p>d</p>

            </div>
            <div className="shadow-md flex-col flex items-center m-10 h-full w-full md:w-1/3 "> {/* 가운데 박스 */}
                <p className={"text-2xl font-semibold"}>기분이 태도가 되지 말자</p>
                <div className="join p-5"> {/* 책 종류 선정 */}
                    <input className="join-item btn btn-square w-32 shadow-md" type="radio" name="options" aria-label="종이책 16,920원" checked/>
                    <input className="join-item btn btn-square w-32 shadow-md" type="radio" name="options" aria-label="eBook 11,850원"/>
                </div>
                <div className="container mx-auto h-full w-full"> {/* 이미지 부분 */}
                    <BookSwiper></BookSwiper>
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