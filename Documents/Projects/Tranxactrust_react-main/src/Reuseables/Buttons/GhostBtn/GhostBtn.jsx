import React from "react";
import style from "./GhostBtn.module.css";
import { Link } from "react-router-dom";


const GhostBtn = ({ styler, btn, svg }) => {
    return (
        <div>
            <li className={style.button}>
                <Link to={'/login'} >
                    <div className={styler} >{btn}
                        {svg}
                        
                    </div>
                </Link>
            </li>
        </div>
    );
};

export default GhostBtn;

{/* <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#068bf7" />
                            <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#068bf7" />
                        </svg> */}