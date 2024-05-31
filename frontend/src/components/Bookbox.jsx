import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useRecoilValue} from "recoil";

const Bookbox = () => {
    const navigate = useNavigate();


    return (
        <div className="container mx-auto p-8">
        <div className="p-4 flex flex-row">
            <div className="h-full border-2 border-gray-200 border-opacity-60
                        rounded-lg overflow-hidden">
                <img
                    className="lg:h-72 md:h-48 w-full
                       object-cover object-center "
                    src="https://ifh.cc/g/qGHNKZ.jpg"/>

            </div>
            <div className="h-full border-2 border-gray-200 border-opacity-60
                        rounded-lg overflow-hidden">
                <img
                    className="lg:h-72 md:h-48 w-full
                       object-cover object-center "
                    src="https://ifh.cc/g/8m99Qt.jpg"/>
            </div>
            <div className="h-full border-2 border-gray-200 border-opacity-60
                        rounded-lg overflow-hidden">
                <img
                    className="lg:h-72 md:h-48 w-full
                       object-cover object-center "
                    src="https://ifh.cc/g/CadAPv.jpg"/>
            </div>
        </div>
        </div>
    )
}

export default Bookbox;