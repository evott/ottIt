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
                <div> {/* 책 출판 글 */}
                    <p className="text-sm text-left font-semibold leading-10">이세종 저자(글) · 양희석 번역</p>
                    <p className="text-sm text-left text-neutral-500 font-medium">모도리(Modori) · 2024년 06월 02일</p>
                    <p className="flex py-5 text-left font-black whitespace-pre text-sm"><img className="size-6"
                                                                                              src="https://ifh.cc/g/O5qrDY.png"/> 주간베스트
                        <p
                            className="px-2.5 py-0.5 text-xs">국내도서 17위 · 인문 3위</p></p>
                </div>
                <div className="flex w-72 rounded-md outline outline-1 outline-gray-200">
                    <div className="flex flex-col h-full p-2 m-2 w-1/2 items-center justify-center">
                        <div className="h-full w-auto flex flex-row items-center justify-center"> {/* 리뷰 토탈 상자 */}
                            <p className="flex text-left font-semibold whitespace-pre items-center justify-center text-black text-xl">
                                <img className="size-[2.3rem]" src="https://ifh.cc/g/D6VjnK.png"></img>10.0
                            </p>
                        </div>
                        <div className="h-full w-auto flex flex-row items-center justify-center"> {/* 리뷰 상자 */}
                            <img className="size-[1.4rem]" src="https://ifh.cc/g/R3xP53.png"/>
                            <img className="size-[1.4rem]" src="https://ifh.cc/g/R3xP53.png"/>
                            <img className="size-[1.4rem]" src="https://ifh.cc/g/R3xP53.png"/>
                            <img className="size-[1.4rem]" src="https://ifh.cc/g/R3xP53.png"/>
                        </div>
                        <div className="items-center justify-center"> {/* 글 상자 */}
                            <p className="m-1 text-xs text-left text-gray-500 font-medium">(<a
                                className="text-xs text-left font-semibold text-gray-950">59</a>개의 리뷰)</p>
                        </div>
                    </div>
                    <div className="flex flex-col h-full p-2 m-2 w-1/2 items-center justify-center">
                        <div className="h-full p-[0.45rem] w-auto flex flex-row items-center justify-center"> {/* 리뷰 토탈 상자 */}
                                <img className="size-[1.3rem]" src="https://ifh.cc/g/XwKgY0.png"></img>
                        </div>
                        <div className="h-full w-auto flex flex-row items-center justify-center"> {/* 리뷰 상자 */}
                            <p className="flex text-left font-black whitespace-pre items-center justify-center text-indigo-900 text-[0.93rem]">도움돼요</p>
                        </div>
                        <div className="items-center justify-center"> {/* 글 상자 */}
                            <p className="m-1 text-xs text-left text-gray-500 font-medium">(<a
                                className="text-xs text-left font-semibold text-gray-950">37%</a>의 구매자)</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex-col flex items-center m-10 h-full w-full md:w-1/3 "> {/* 가운데 박스 */}
                <p className={"text-2xl font-semibold"}>기분이 태도가 되지 말자</p>
                <div className="join p-5"> {/* 책 종류 선정 */}
                    <input className="join-item btn btn-square w-32 shadow-md" type="radio" name="options"
                           aria-label="종이책 16,920원" checked/>
                    <input className="join-item btn btn-square w-32 shadow-md" type="radio" name="options"
                           aria-label="eBook 11,850원"/>
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