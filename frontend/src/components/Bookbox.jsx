import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useRecoilTransaction_UNSTABLE, useRecoilValue} from "recoil";

const Bookbox = (props) => {
    const navigate = useNavigate();

        if(props.tab==0){
           return (
               <div className="container mx-auto p-8">
                   <div className="space-x-6 flex flex-row">
                       <div className="h-full border-2 border-gray-200 border-opacity-60
                        rounded-lg overflow-hidden">
                           <img
                               className="h-[20rem] w-64"
                               src="https://ifh.cc/g/hy1Dqp.jpg"/>

                       </div>
                       <div className="h-full border-2 border-gray-200 border-opacity-60
                        rounded-lg overflow-hidden">
                           <img
                               className="h-[20rem] w-64"
                               src="https://ifh.cc/g/Crkh1k.jpg"/>
                       </div>
                       <div className="h-full border-2 border-gray-200 border-opacity-60
                        rounded-lg overflow-hidden">
                           <img
                               className="h-[20rem] w-64"
                               src="https://ifh.cc/g/Rw8T21.jpg"/>
                       </div>
                       <div className="h-full border-2 border-gray-200 border-opacity-60
                        rounded-lg overflow-hidden">
                           <img
                               className="h-[20rem] w-64"
                               src="https://ifh.cc/g/4SH8w8.jpg"/>
                       </div>
                   </div>
               </div>
           )
        }

}

export default Bookbox;