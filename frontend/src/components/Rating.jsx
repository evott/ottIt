import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useRecoilValue} from "recoil";

const Rating = () => {


    return (
        <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
        </div>
    )
}

export default Rating;