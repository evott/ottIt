import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useRecoilValue} from "recoil";


const BottomBox = () => {

    return(
        <div className="fixed z-10 bottom-0 left-0">
            <div
                className="flex flex-row items-center w-screen bg-white h-[5rem] outline outline-1 outline-gray-300"> {/* 고정 박스 */}
                <p className="ml-[8rem] mb-[0.5rem] text-[0.91rem] text-black font-semibold">총 상품 금액</p>
                <p className="ml-[2.3rem] mb-[0.8rem] text-[1.5rem] text-black font-black">14,400원</p>
                <div
                    className="flex flex-row items-center mb-[0.5rem] ml-[27.5rem] w-[6rem] h-[2.5rem] rounded-md outline outline-1 outline-gray-300">
                    {/* 개수 박스 */}
                    <div className="rounded-md justify-start h-full w-[2.2rem]">
                        <img
                            className="ml-[0.37rem] mt-[0.45rem] w-[1.3rem] h-[1.7rem] cursor-pointer items-center justify-center"
                            src="https://ifh.cc/g/ZWcodB.png"/>
                    </div>
                    <p className="text-[0.9rem] font-semibold text-black ml-[0.60rem] items-center">1</p>
                    <div className="ml-[0.65rem] rounded-md justify-end h-full w-[2.2rem]">
                        <img
                            className="ml-[0.46rem] mt-[0.715rem] items-center cursor-pointer justify-center size-[1.2rem]"
                            src="https://ifh.cc/g/Z3Z0zB.png"/>
                    </div>
                </div>
                <div
                    className="ml-[1.4rem] flex items-center justify-center cursor-pointer rounded-md outline outline-1 mb-[0.47rem] h-[3rem] w-[3rem] outline-gray-300">
                    {/* 하트창 */}
                    <img className="size-[1.25rem]" src="https://ifh.cc/g/ChkCTC.png"/>
                </div>
                <div
                    className="flex ml-[0.5rem] hover:bg-gray-100 mb-[0.47rem] h-[3rem] w-[8rem] items-center justify-center cursor-pointer rounded-md outline outline-1 outline-gray-300">
                    {/* 선물하기 */}
                    <img className="size-[1.25rem] mb-[0.2rem] mr-[0.3rem]" src="https://ifh.cc/g/kfBOdX.png"/>
                    <p className="font-bold text-base text-black">선물하기</p>
                </div>
                <div
                    className="flex ml-[0.5rem] hover:bg-gray-100 mb-[0.47rem] h-[3rem] w-[7.3rem] items-center justify-center cursor-pointer rounded-l-md outline outline-1 outline-indigo-800">
                    {/* 장바구니 */}
                    <p className="font-bold text-base text-indigo-800">장바구니</p>
                </div>
                <div
                    className="flex ml-[rem] hover:bg-indigo-800 mb-[0.47rem] h-[3rem] w-[7.3rem] items-center justify-center cursor-pointer rounded-r-md outline outline-1 bg-indigo-700 outline-indigo-700">
                    {/* 바로구매 */}
                    <p className="font-bold text-base text-white">바로구매</p>
                </div>
            </div>
        </div>


    )
}
export default BottomBox;