// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import green from "../../../images/point-of-interest-map2.gif";
// import blue from "../../../images/point-of-interest-map.gif";
// import black from "../../../images/point-of-interest-map3.gif";
// import red from "../../../images/point-of-interest-map4.gif";
// import deliver from "../../../images/Rectangle 29.png";
// import style from "./Delivery.module.css";

// const Delivery = () => {
//     const navigate = useNavigate();

//     const getSignUp = () => {
//         navigate('/logistics');     
//     };

//     const logistics = () => {
//         navigate('/logistics');     
//     };
    
//     return (
//         <section className="container mx-auto py-8 text-center">
//             <div className="max-w-4xl mx-auto">
//                 <div className={style.linkContainer2}>
//                     <div className={style.barrier1}>
//                         <p>Synchronizing payment and delivery<span className={style.span1}> for consumers & merchants</span></p>
//                         <p className={style.trust2}>Tranxactrust partners with reliable logistics service providers and other commercial transporters to make payment and delivery to buyer's location seamless and undeniable.</p>
//                         <img className={style.green} src={green} alt="point-of-interest"/>
//                         <div className={style.location}>
//                             <img src={blue} alt="point-of-interest"/>
//                             <img src={black} alt="point-of-interest"/>
//                             <img src={red} alt="point-of-interest"/>
//                         </div>
//                     </div>

//                     <div className={style.index}>
//                         <div className={style.linkContainer3}>
//                             <div className={style.delivery}>
//                                 <p className={style.edp}>Express Delivery Protocol <abbr title="Express Delivery Protocol">(EDP)</abbr></p>
//                                 <div className={style.svgContainer}>
//                                     <svg className={style.svg1} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <circle cx="35" cy="35" r="35" fill="#0887ef" />
//                                     </svg>
//                                     <svg className={style.svg2} width="44" height="44" viewBox="0 0 38 46" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M41.0312 22.834L36.9297 13.2637C36.825 13.0166 36.6499 12.8057 36.4263 12.6574C36.2026 12.5091 35.9402 12.4299 35.6719 12.4297H31.5703V9.69531C31.5703 9.33271 31.4263 8.98496 31.1699 8.72857C30.9135 8.47217 30.5657 8.32812 30.2031 8.32812H4.22656C3.86396 8.32812 3.51621 8.47217 3.25981 8.72857C3.00342 8.98496 2.85938 9.33271 2.85938 9.69531V32.9375C2.85938 33.3001 3.00342 33.6479 3.25981 33.9043C3.51621 34.1606 3.86396 34.3047 4.22656 34.3047H7.15234C7.46718 35.4632 8.15449 36.4859 9.10824 37.2151C10.062 37.9442 11.2292 38.3393 12.4297 38.3393C13.6302 38.3393 14.7974 37.9442 15.7511 37.2151C16.7049 36.4859 17.3922 35.4632 17.707 34.3047H26.293C26.6078 35.4632 27.2951 36.4859 28.2489 37.2151C29.2026 37.9442 30.3698 38.3393 31.5703 38.3393C32.7708 38.3393 33.938 37.9442 34.8918 37.2151C35.8455 36.4859 36.5328 35.4632 36.8477 34.3047H39.7734C40.136 34.3047 40.4838 34.1606 40.7402 33.9043C40.9966 33.6479 41.1406 33.3001 41.1406 32.9375V23.3672C41.1403 23.1839 41.1031 23.0026 41.0312 22.834ZM31.5703 15.1641H34.7695L37.6953 22H31.5703V15.1641ZM12.4297 35.6719C11.8889 35.6719 11.3602 35.5115 10.9106 35.2111C10.4609 34.9106 10.1104 34.4835 9.90345 33.9839C9.6965 33.4843 9.64235 32.9345 9.74785 32.4041C9.85336 31.8736 10.1138 31.3864 10.4962 31.004C10.8786 30.6216 11.3658 30.3612 11.8962 30.2557C12.4267 30.1502 12.9764 30.2043 13.4761 30.4113C13.9757 30.6182 14.4028 30.9687 14.7032 31.4184C15.0037 31.868 15.1641 32.3967 15.1641 32.9375C15.1641 33.6627 14.876 34.3582 14.3632 34.871C13.8504 35.3838 13.1549 35.6719 12.4297 35.6719ZM26.293 31.5703H17.707C17.3922 30.4118 16.7049 29.3891 15.7511 28.6599C14.7974 27.9308 13.6302 27.5357 12.4297 27.5357C11.2292 27.5357 10.062 27.9308 9.10824 28.6599C8.15449 29.3891 7.46718 30.4118 7.15234 31.5703H5.59375V11.0625H28.8359V28.2344C28.2134 28.5957 27.6683 29.0764 27.2319 29.6488C26.7955 30.2213 26.4764 30.8743 26.293 31.5703ZM31.5703 35.6719C31.0295 35.6719 30.5008 35.5115 30.0512 35.2111C29.6015 34.9106 29.251 34.4835 29.0441 33.9839C28.8371 33.4843 28.783 32.9345 28.8885 32.4041C28.994 31.8736 29.2544 31.3864 29.6368 31.004C30.0192 30.6216 30.5064 30.3612 31.0369 30.2557C31.5673 30.1502 32.1171 30.2043 32.6167 30.4113C33.1164 30.6182 33.5434 30.9687 33.8439 31.4184C34.1443 31.868 34.3047 32.3967 34.3047 32.9375C34.3047 33.6627 34.0166 34.3582 33.5038 34.871C32.991 35.3838 32.2955 35.6719 31.5703 35.6719ZM38.4062 31.5703H36.8477C36.5453 30.3994 35.8634 29.3616 34.9085 28.6195C33.9536 27.8774 32.7797 27.4727 31.5703 27.4688V24.7344H38.4062V31.5703Z" fill="#f6f8fa" />
//                                     </svg>
//                                 </div>
//                             </div>
//                             <div className={style.description}>
//                                 <p> Synchronise payment and product delivery on Tranxactrust. Pump up your customers' excitement to pay you on the go. <span className={style.update} onClick={logistics}> Click here</span> to find available delivery services and update your Tranxactrust account with reliable delivery logistics details - whether commercial vehicles for waybills or courier services like GIG, DHL, UPS, FedEx, etc. Passing our <abbr title="Express Delivery Protocol" className={style.abbr}>EDP</abbr> clearance status is easy, clears any doubts of time wasting and consolidates your capacity and readiness to deliver paid products.</p>
//                                 <button onClick={getSignUp} className={style.account2}>Learn More
//                                     <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#FCFCFD" />
//                                         <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#FCFCFD" />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className={style.deliveryman}>
//                             <p className={style.introHeader}>Delivery to customers' location is easier and time-saving when synchronized with payment on <span className={style.span2}>Tranxactrust.</span></p>
//                             <img className={style.rectangle} src={deliver} alt="Delivery service" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Delivery;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import green from "../../../images/point-of-interest-map2.gif";
import blue from "../../../images/point-of-interest-map.gif";
import black from "../../../images/point-of-interest-map3.gif";
import red from "../../../images/point-of-interest-map4.gif";
import deliver from "../../../images/Rectangle 29.png";
import style from "./Delivery.module.css"



const Delivery = () => {
    const navigate = useNavigate();

    const getSignUp = () => {
        navigate('/logistics');     
    };

    const logistics = () => {
        navigate('/logistics');     
    };
    

    return (
        <section className="container mx-auto h-full w-screen text-center flex flex-col">
            <div className={style.linkContainer2}>
                <div className={style.barrier1}><p className={style.sync}>Synchronizing payment and delivery
                    <span className={style.span1}> for consumers & merchants</span></p>

                    <p className={style.trust2}>Tranxactrust partners with reliable
                        logistics service providers and other commercial
                        transporters to make payment and delivery to buyer's
                        location seamless and undeniable.
                    </p>



                    <img className={style.green} src={green} alt="point-of-interest"/>
                    <div className={style.location}>
                        <img src={blue} alt="point-of-interest"/>
                        <img src={black} alt="point-of-interest"/>
                        <img src={red} alt="point-of-interest"/>
                    </div>
                </div>

                <div className={style.index}>
                    <div className={style.linkContainer3}>
                        <div className={style.delivery}>
                            <p className={style.edp}>Delivery Protocol <abbr title="Delivery Protocol">(DP)</abbr></p>

                            <div className={style.svgContainer}>
                                <svg className={style.svg1} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#0887ef" />
                                </svg>
                                <svg className={style.svg2} width="44" height="44" viewBox="0 0 38 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.0312 22.834L36.9297 13.2637C36.825 13.0166 36.6499 12.8057 36.4263 12.6574C36.2026 12.5091 35.9402 12.4299 35.6719 12.4297H31.5703V9.69531C31.5703 9.33271 31.4263 8.98496 31.1699 8.72857C30.9135 8.47217 30.5657 8.32812 30.2031 8.32812H4.22656C3.86396 8.32812 3.51621 8.47217 3.25981 8.72857C3.00342 8.98496 2.85938 9.33271 2.85938 9.69531V32.9375C2.85938 33.3001 3.00342 33.6479 3.25981 33.9043C3.51621 34.1606 3.86396 34.3047 4.22656 34.3047H7.15234C7.46718 35.4632 8.15449 36.4859 9.10824 37.2151C10.062 37.9442 11.2292 38.3393 12.4297 38.3393C13.6302 38.3393 14.7974 37.9442 15.7511 37.2151C16.7049 36.4859 17.3922 35.4632 17.707 34.3047H26.293C26.6078 35.4632 27.2951 36.4859 28.2489 37.2151C29.2026 37.9442 30.3698 38.3393 31.5703 38.3393C32.7708 38.3393 33.938 37.9442 34.8918 37.2151C35.8455 36.4859 36.5328 35.4632 36.8477 34.3047H39.7734C40.136 34.3047 40.4838 34.1606 40.7402 33.9043C40.9966 33.6479 41.1406 33.3001 41.1406 32.9375V23.3672C41.1403 23.1839 41.1031 23.0026 41.0312 22.834ZM31.5703 15.1641H34.7695L37.6953 22H31.5703V15.1641ZM12.4297 35.6719C11.8889 35.6719 11.3602 35.5115 10.9106 35.2111C10.4609 34.9106 10.1104 34.4835 9.90345 33.9839C9.6965 33.4843 9.64235 32.9345 9.74785 32.4041C9.85336 31.8736 10.1138 31.3864 10.4962 31.004C10.8786 30.6216 11.3658 30.3612 11.8962 30.2557C12.4267 30.1502 12.9764 30.2043 13.4761 30.4113C13.9757 30.6182 14.4028 30.9687 14.7032 31.4184C15.0037 31.868 15.1641 32.3967 15.1641 32.9375C15.1641 33.6627 14.876 34.3582 14.3632 34.871C13.8504 35.3838 13.1549 35.6719 12.4297 35.6719ZM26.293 31.5703H17.707C17.3922 30.4118 16.7049 29.3891 15.7511 28.6599C14.7974 27.9308 13.6302 27.5357 12.4297 27.5357C11.2292 27.5357 10.062 27.9308 9.10824 28.6599C8.15449 29.3891 7.46718 30.4118 7.15234 31.5703H5.59375V11.0625H28.8359V28.2344C28.2134 28.5957 27.6683 29.0764 27.2319 29.6488C26.7955 30.2213 26.4764 30.8743 26.293 31.5703ZM31.5703 35.6719C31.0295 35.6719 30.5008 35.5115 30.0512 35.2111C29.6015 34.9106 29.251 34.4835 29.0441 33.9839C28.8371 33.4843 28.783 32.9345 28.8885 32.4041C28.994 31.8736 29.2544 31.3864 29.6368 31.004C30.0192 30.6216 30.5064 30.3612 31.0369 30.2557C31.5673 30.1502 32.1171 30.2043 32.6167 30.4113C33.1164 30.6182 33.5434 30.9687 33.8439 31.4184C34.1443 31.868 34.3047 32.3967 34.3047 32.9375C34.3047 33.6627 34.0166 34.3582 33.5038 34.871C32.991 35.3838 32.2955 35.6719 31.5703 35.6719ZM38.4062 31.5703H36.8477C36.5453 30.3994 35.8634 29.3616 34.9085 28.6195C33.9536 27.8774 32.7797 27.4727 31.5703 27.4688V24.7344H38.4062V31.5703Z" fill="#f6f8fa" />
                                </svg>
                            </div>
                        </div>

                        <div className={style.description}>
                            <p> Synchronise payment and product delivery on Tranxactrust.
                                Pump up your customers' excitement to pay you on the go.
                                <span className={style.update} onClick={logistics}> Click here</span> to find available
                                delivery services and update your Tranxactrust account with
                                reliable delivery logistics details - whether commercial
                                vehicles for waybills or courier services like GIG, DHL, UPS,
                                FedEx, etc. Passing our express <abbr title="Delivery Protocol" className={style.abbr}>Delivery Protocol</abbr> clearance status is easy, clears
                                any doubts of time wasting and consolidates your capacity and
                                readiness to deliver paid products.
                            </p>

                                <button onClick={getSignUp} className={style.account2}>Learn More
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#FCFCFD" />
                                    <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#FCFCFD" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={style.deliveryman}>
                        <p className={style.introHeader}>Delivery to customers' location is easier
                            and time-saving when synchronized with payment on <span className={style.span2}>
                                Tranxactrust.</span>
                        </p>

                        <img className={style.rectangle} src={deliver} alt="Delivery service" />

                    </div>
                </div>
            </div>
        </section>
    );
}


export default Delivery
