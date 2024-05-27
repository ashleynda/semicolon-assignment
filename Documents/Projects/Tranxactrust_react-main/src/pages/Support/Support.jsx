import React from "react";
import { Link } from "react-router-dom";
import style from "./Support.module.css";

const Support = () => {
    return(
        <Link to={'/signup'} >
        <p className={style.support}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
                <circle cx="50" cy="50" r="40" fill="#173c5a" />
                <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle" fontSize="40" fill="white">?</text>
            </svg>
            Support</p>
    </Link>
    )
 
}

export default Support;