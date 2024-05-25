import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useRecoilValue} from "recoil";

const Navbar = () => {
    const navigate = useNavigate();




return (
    <div className="p-2 w-full">
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">OttIt</a>
        </div>
        <div className="flex-none">
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
                    <li><a className = "font-bold">Settings</a></li>
                    <li><a className = "font-bold">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
)
};

export default Navbar;