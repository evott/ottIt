import { BrowserRouter, Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookSwiper from "../components/BookSwiper.jsx";
import BottomBox from "../components/BottomBox.jsx";
import Eventscroll from "../components/Eventscroll.jsx";


const BookDetail = () => {
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
        <div className="flex flex-col">
            <div className="container mx-auto w-full p-8 flex">
                <BottomBox></BottomBox>
                <div className="flex-col flex mx-auto h-full items-center md:w-1/3"> {/* 왼쪽 박스 */}
                    <div className="h-60"></div>
                    <div> {/* 책 출판 글 */}
                        <p className="text-sm text-left font-semibold leading-10">{BookData.book_writer}</p>
                        <p className="text-sm text-left text-neutral-500 font-medium">모도리(Modori) · 2024년 06월 02일</p>
                        <p className="flex py-5 text-left font-black whitespace-pre text-sm"><img className="size-6"
                                                                                                  src="https://ifh.cc/g/O5qrDY.png"/> 주간베스트
                            <p className="px-2.5 py-0.5 text-xs">국내도서 17위 · 인문 3위</p></p>
                    </div>
                    <div className="flex w-72 rounded-md outline outline-1 outline-gray-200">
                        <div className="flex flex-col h-full p-2 m-2 w-1/2 items-center justify-center">
                            <div className="h-full w-auto flex flex-row items-center justify-center"> {/* 리뷰 토탈 상자 */}
                                <p className="flex text-left font-semibold text-yellow-400 whitespace-pre items-center justify-center text-xl">
                                    <img className="size-[2.2rem] " src="https://ifh.cc/g/D6VjnK.png"></img>9.5
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
                            <div
                                className="h-full p-[0.45rem] w-auto flex flex-row items-center justify-center"> {/* 리뷰 토탈 상자 */}
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

                <div className="flex-col flex items-center mx-auto m-10 h-full w-full md:w-1/3 "> {/* 가운데 박스 */}
                    <p className={"text-2xl font-semibold"}>{BookData.book_name}</p>
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

                <div className="flex-col flex h-full items-center md:w-1/3"> {/* 오른쪽 박스 */}
                    <div className="h-60"></div>
                    <div> {/* 책 출판 글 */}
                        <div className="columns-3 w-[8.5rem] py-2 items-start justify-start">
                            <p className="shadow text-xs text-center text-gray-500 font-medium rounded-sm outline-gray-200 outline outline-1 h-4 w-11">사은품</p>
                            <p className="shadow text-xs text-center text-gray-500 font-medium rounded-sm outline-gray-200 outline outline-1 h-4 w-11">이벤트</p>
                            <p className="shadow text-xs text-center text-gray-500 font-medium rounded-sm outline-gray-200 outline outline-1 h-4 w-11">할인</p>
                        </div>

                        <p className="text-xl mt-4 mb-4 text-left text-neutral-500 font-medium">
                            <a className="text-2xl font-semibold text-yellow-400">10%</a>
                            <a className="text-2xl ml-1.5 font-semibold text-black">{BookData.book_dprice}</a>
                            <a className="text-sm ml-1.5 line-through font-medium text-gray-600 ">{BookData.book_price}</a>
                        </p>
                        <div className="mr-2 flex flex-row items-center justify-center">
                            <p className="border-y w-80 text-black border-solid flex flex-row py-5 text-left font-black text-sm">적립/혜택
                                <p className="items-center ml-[12.8rem] justify-center text-sm text-yellow-400">800P</p>
                            </p>
                        </div>
                    </div>
                    <div className="flex-col border-b border-solid h-[6.4rem] mr-4 flex w-80">
                        <p className="mt-4 text-sm font-black text-black">배송안내
                            <a className="font-black ml-[2.7rem] text-[0.8rem] text-black">도서 포함 15,000원 이상 무료배송</a>
                        </p>
                        <p className="ml-[7.6rem] text-sm font-black py-[0.3rem] text-black">
                            <a className="text-[0.7rem] mr-2 text-indigo-600 px-[0.4rem] bg-gray-100 rounded-xl outline outline-1 outline-gray-200">당일배송</a>
                            <a className="mt-[0.5rem] text-sm font-black text-black">오늘(6/3,월) 도착</a>
                        </p>
                        <p className="text-sm ml-[12.2rem] font-medium text-gray-500">
                            기본배송지 기준
                        </p>
                    </div>
                    <div className="flex-col border-b border-solid justify-center h-[4rem] mr-4 flex w-80">
                        <p className="text-xs font-medium ml-[5rem] text-black">
                            <a className="text-yellow-400 font-semibold">로그인 </a>
                            후 <a className="text-xs font-semibold text-black">정확한 배송 안내</a>를 받아보세요!
                        </p>
                    </div>
                    <div className="flex flex-row w-80 mt-4 justify-center"> {/* 하단부 */}
                        <div className="w-1/1"> {/* 글 상자 */}
                            <p className="text-xs font-semibold text-gray-500">알림 신청하시면 원하는 정보를 받아보실 수 있습니다.</p>
                        </div>
                        <div className="w-1/2 h-full ml-[3rem] flex flex-row "> {/* 알림 박스 */}
                            <div
                                className="flex flex-row items-center justify-center hover:bg-gray-200 cursor-pointer w-[5rem] h-[1.7rem] rounded outline outline-1 outline-indigo-800">
                                <img className="size-4" src="https://ifh.cc/g/NwxjSc.png"/>
                                <p className="ml-[0.1rem] text-xs text-indigo-800 font-semibold">알림신청</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-80 mt-5 justify-center">
                        <div
                            className="flex flex-row items-center justify-center hover:bg-gray-200 cursor-pointer w-80 h-[2.5rem] rounded outline outline-1 outline-gray-300">
                            <img className="flex items-center justify-center w-6 h-5"
                                 src="https://ifh.cc/g/Zcdvz2.png"/>
                            <p className="text-[0.8rem] text-gray-900 font-semibold">매장 재고·위치</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-row w-full mx-auto h-[4rem] space-x-[3.5rem] items-center border-b-[0.1rem] border-gray-300">
                <p className="ml-[18.8rem] text-gray-500 text-[1rem] font-medium">이벤트</p>
                <p className="text-gray-500 text-[1rem] font-medium">상품정보</p>
                <p className="text-gray-500 text-[1rem] font-medium">리뷰</p>
                <p className="text-gray-500 text-[1rem] font-medium">교환/반품/품절</p>
            </div>
            <div className="flex flex-row items-center ml-[18.8rem] mt-20 w-full mx-auto">
                <p className="text-black font-black text-lg">이 책의 이벤트</p>
                <p className="ml-[13.5rem] text-gray-600 text-xs">*해외주문/바로드림/제휴사주문/업체배송건의 경우 1+1 증정상품이 발송되지 않습니다.</p>
                <p className="text-black ml-[3.2rem] font-black text-lg">기분 좋은 발견</p>
                <p className="text-gray-600 mt-[0.2rem] ml-[10.5rem] font-medium text-xs items-center">더보기</p>
            </div>
            <div className="flex flex-row items-center space-x-5 w-full">
                <img className="ml-[18.5rem] w-[16rem] h-[9rem] rounded-2xl" src="https://ifh.cc/g/RGDOpK.jpg"></img>
                <img className="w-[16rem] h-[9rem] rounded-2xl" src="https://ifh.cc/g/mbFVdP.jpg"></img>
                <img className="w-[16rem] h-[9rem] rounded-2xl" src="https://ifh.cc/g/rJ81qr.jpg"></img>
                <div className="mt-2">
                <Eventscroll></Eventscroll>
                </div>
            </div>
            <div>
                <img src="https://ifh.cc/g/rJ81qr.jpg"></img>
            </div>
        </div>
    )
}

export default BookDetail;