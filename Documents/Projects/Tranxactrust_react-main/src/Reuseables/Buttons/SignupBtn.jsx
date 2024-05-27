import React from "react";
import { Link } from "react-router-dom";
import style from "./SignupBtn.module.css";

const SignupBtn = ({ btn }) => {
    return (
        <div>
            <ul>
                <li className={style.button}>
                    <Link to={'/signup'} >
                        <button className={style.account}>{btn}</button>
                    </Link>
                    {/* <Link to={'/signup'} >
                        <div className={style.contact} >{btn2}
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#068bf7" />
                                <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#068bf7" />
                            </svg>
                        </div>
                    </Link> */}
                </li>
            </ul>
        </div>
    );
};

export default SignupBtn;