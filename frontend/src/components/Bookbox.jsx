import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useRecoilTransaction_UNSTABLE, useRecoilValue} from "recoil";
import axios from 'axios';

const Bookbox = (props) => {

    const [ Bid, setBid ] = useState(0);

    const navigate = useNavigate();

    const handleClick = (Bid) => {
        setBid(Bid);
        navigate(`/BookDetail/${Bid}`);
    };

    if(props.tab==0){ {/* 전체 */}
           return (
               <div className="container mx-auto p-8 items-center justify-center flex">
                   <div className="space-x-6 flex flex-row">
                       <div
                           className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105" onClick={() => handleClick(2)}>
                           <img
                               className="h-[20rem] w-64"
                               src="https://ifh.cc/g/hy1Dqp.jpg"/>
                           <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">인문</p>
                           <p className="mt-[0.25rem] font-bold text-[0.95rem]">마르지 않아도 잘 사는데요</p>
                           <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">노은솔</p>
                       </div>
                       <div className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105"onClick={() => handleClick(3)}>
                           <img
                               className="h-[20rem] w-64"
                               src="https://ifh.cc/g/Crkh1k.jpg"/>
                           <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">인문</p>
                           <p className="mt-[0.25rem] font-bold text-[0.95rem]">죽이고 싶은 아이2</p>
                           <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">이꽃님</p>
                       </div>
                       <div className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105" onClick={() => handleClick(4)}>
                           <img
                               className="h-[20rem] w-64"
                               src="https://ifh.cc/g/Rw8T21.jpg"/>
                           <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">인문</p>
                           <p className="mt-[0.25rem] font-bold text-[0.95rem]">마지막 지도 제작자</p>
                           <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">크리스티나 순톤밧·책읽는곰</p>
                       </div>
                       <div className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105" onClick={() => handleClick(1)}>
                           <img
                               className="h-[20rem] w-64"
                               src="https://ifh.cc/g/4SH8w8.jpg"/>
                           <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">인문</p>
                           <p className="mt-[0.25rem] font-bold text-[0.95rem]">기분이 태도가 되지 말자</p>
                           <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">하이스트</p>
                       </div>
                   </div>
               </div>
           )
    }
    if (props.tab == 1) { {/* 국내도서 */}
        return (
            <div className="container mx-auto p-8 items-center justify-center flex">
                <div className="space-x-6 flex flex-row">
                    <div className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105">
                        <img
                            className="h-[20rem] w-64"
                            src="https://ifh.cc/g/Bn9ZC3.jpg"/>
                        <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">인문</p>
                        <p className="mt-[0.25rem] font-bold text-[0.95rem]">당신은 결국 무엇이든 해내는 사람</p>
                        <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">김상현</p>

                    </div>
                    <div className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105">
                        <img
                            className="h-[20rem] w-64"
                            src="https://ifh.cc/g/PMsppg.jpg"/>
                        <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">인문</p>
                        <p className="mt-[0.25rem] font-bold text-[0.95rem]">꽃길이 따로 있나, 내 삶이 꽃인 것을</p>
                        <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">오황선</p>
                    </div>
                    <div className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105">
                        <img
                            className="h-[20rem] w-64"
                            src="https://ifh.cc/g/Mv8vVx.jpg"/>
                        <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">인문</p>
                        <p className="mt-[0.25rem] font-bold text-[0.95rem]">보편의 단어</p>
                        <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">이기주</p>
                    </div>
                    <div
                        className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105">
                        <img
                            className="h-[20rem] w-64"
                            src="https://ifh.cc/g/d0KKhY.jpg"/>
                        <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">인문</p>
                        <p className="mt-[0.25rem] font-bold text-[0.95rem]">누군가를 이토록 사랑한 적</p>
                        <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">이병률</p>
                    </div>
                </div>
            </div>
        )
    }
    if (props.tab == 2) { {/* 서양도서 */}
        return (
            <div className="container items-center justify-center flex mx-auto p-8">
                <div className="space-x-6 flex flex-row">
                    <div className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105">
                        <img
                            className="h-[20rem] w-64"
                            src="https://ifh.cc/g/MFZXfR.jpg"/>
                        <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">인문</p>
                        <p className="mt-[0.25rem] font-bold text-[0.95rem]">에밀리 디킨슨 시 선집</p>
                        <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">에밀리 디킨슨</p>

                    </div>
                    <div className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105">
                        <img
                            className="h-[20rem] w-64"
                            src="https://ifh.cc/g/bK5n5G.jpg"/>
                        <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">인문</p>
                        <p className="mt-[0.25rem] font-bold text-[0.95rem]">Whatever Happens</p>
                        <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">T. Jeong</p>
                    </div>
                    <div className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105">
                        <img
                            className="h-[20rem] w-64"
                            src="https://ifh.cc/g/w5jHmj.jpg"/>
                        <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">인문</p>
                        <p className="mt-[0.25rem] font-bold text-[0.95rem]">패터슨(PATERSON)</p>
                        <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">윌리엄 칼로스 윌리엄스</p>
                    </div>
                    <div className="h-full rounded-lg overflow-hidden transform transition-transform cursor-pointer duration-300 hover:scale-105">
                        <img
                            className="h-[20rem] w-64"
                            src="https://ifh.cc/g/65Ppxb.jpg"/>
                        <p className="mt-[0.9rem] font-normal text-[0.79rem] text-gray-500">인문</p>
                        <p className="mt-[0.25rem] font-bold text-[0.95rem]">The City in Which I Love You</p>
                        <p className="mt-[0.3rem] font-normal text-[0.79rem] text-gray-500">리영라(Li-Young Lee)</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bookbox;