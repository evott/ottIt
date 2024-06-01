        import {Link, useNavigate} from "react-router-dom";
        import React, {useEffect, useState} from 'react';
        import {useRecoilValue} from "recoil";

        const Navbar = () => {
            const navigate = useNavigate();


            return (
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h7"/>
                                </svg>
                            </div>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Homepage</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>About</a></li>
                            </ul>
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