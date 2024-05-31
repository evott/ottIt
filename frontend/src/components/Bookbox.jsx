import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useRecoilValue} from "recoil";

const Bookbox = () => {
    const navigate = useNavigate();


    return (
        <div className="p-4 sm:w-1/2 lg:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60
                        rounded-lg overflow-hidden">
                <img
                    className="lg:h-72 md:h-48 w-full
                       object-cover object-center "
                    src="https://picsum.photos/id/188/720/400/"
                    alt="card image"
                />
            </div>
        </div>
    )
}

export default Bookbox;