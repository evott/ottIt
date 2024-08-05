import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useRecoilTransaction_UNSTABLE, useRecoilValue} from "recoil";
import axios from 'axios';

const ModalPopup=()=>{
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex flex-row w-full h-[50rem] items-center justify-center">
                <div className="flex flex-col w-96 h-[28rem] items-center bg-white rounded-2xl shadow-md">
                    <div className="flex flex-row top-0 right-0 w-6 h-6 items-center mt-4 ml-72 mb-4">
                        <img src="https://ifh.cc/g/zZ7NnL.png" className="w-6 h-6"/>
                    </div>
                    <img src="https://ifh.cc/g/jy9mGq.png" className="w-72 h-72"/>
                    <div className="flex flex-row w-72 h-11 items-center justify-center bg-black rounded-2xl shadow-md mt-4">
                        <p>Learn more</p>
                    </div>x
                </div>
            </div>
        </div>
    )
}

export default ModalPopup;