import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "./IntroSect.module.css";
import SignupBtn from "../Buttons/SignupBtn";
import GhostBtn from "../Buttons/GhostBtn/GhostBtn";

const IntroSect = ({ text, text2, imgage, img, text3, btn, btn2 }) => {
    const navigate = useNavigate();

    const home = () => {
        navigate('/home');
    };
    const signup = () => {
        navigate('/signup');
    };

    return (
        // <main>
        <section className="container mx-auto h-full w-screen flex flex-row">
                {/* <div className={style.wrapper}> */}
                    {/* <div className={style.welcome}> */}
                        <div className={style.unlock}>
                            {/* <div className={style.barrier}>
                            <span className={style.span}>Win customer trust, </span>
                            fuel your growth
                            </div> */}

                            <div className={style.barrier}>
                                <span className={style.span}>{text} </span>{text2}

                            </div>

                            <p className={style.trust}>{text3}
                                {/* Accept fiat and crypto payments from anywhere.
                            Pay vendors with a fiat or crypto account. Retain control over payouts.
                            Never let trust cost you the deal. */}
                            </p>

                            <ul>
                                <li className={style.button}>
                                    <Link to={'/signup'} >
                                        <button className={style.account}>{btn}</button>
                                    </Link>
                                    <Link to={'/signup'} >
                                        <div className={style.contact} >{btn2}
                                            <svg className={style.contactSvg} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#068bf7" />
                                                <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#068bf7" />
                                            </svg>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={style.gif}>
                            {/* {img} */}

                            <img src={imgage} className={img} alt="Cinque Terre" />

                        </div>
                    {/* </div>
                </div> */}

            </section>
        // </main>
    );

};

export default IntroSect;