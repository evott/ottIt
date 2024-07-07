        import {Link, useNavigate} from "react-router-dom";
        import React, {useEffect, useState} from 'react';
        import {useRecoilValue} from "recoil";
        import {Button} from "@headlessui/react";

        const Navbar = () => {
            const navigate = useNavigate();

            const handleClick = () => {
                navigate(`/`);
            };

            return (
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                            <div className="drawer-content">
                                {/* 메뉴 버튼 */}
                                <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         className="inline-block w-5 h-5 stroke-current">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </label>
                            </div>
                            <div className="drawer-side z-10">
                                <label htmlFor="my-drawer" aria-label="close sidebar"
                                       className="drawer-overlay"></label>
                                <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                                    {/* 사이드바 내용 */}
                                    <div className="drawer-content items-center flex flex-row">
                                        {/* 메뉴 버튼 */}
                                        <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 className="inline-block w-5 h-5 stroke-current">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M4 6h16M4 12h16M4 18h16"></path>
                                            </svg>
                                        </label>
                                        <a><img className="mt-1 ml-2 w-28 mx-auto p-auto" alt="로고"
                                                src="https://ifh.cc/g/VRak2k.png"/></a>
                                    </div>
                                    <li className="flex-row" onClick={handleClick}>
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                            </svg>
                                            <p className="items-center font-normal ml-[0.8rem]">홈</p>
                                        </a></li>
                                    <li><a>국내도서</a></li>
                                    <li><a>서양도서</a></li>
                                    <li><a>일본도서</a></li>
                                    <li>
                                        <a href="Shopping" onClick="location.href='Shopping.jsx'">장바구니</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">
                    <img alt="로고" src="https://ifh.cc/g/VRak2k.png"/></a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="프로필 사진"
                                 src="https://ifh.cc/g/7ky5bT.jpg"/>
                                </div>
                            </div>
                        <ul tabIndex={0}
                            className="mt-3 z-10 p-2 shadow-md menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between font-bold">
                                    Profile
                                </a>
                            </li>
                            <li><a className="font-bold">Settings</a></li>
                            <li><a className="font-bold">Logout</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            )

        };

        export default Navbar;