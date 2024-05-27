// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Services = () => {
//     const navigate = useNavigate();

//     const getSignUp = () => {
//         navigate('/logistics');
//     };

//     const logistics = () => {
//         navigate('/logistics');
//     };

//     return (
//         <section className="container mx-auto h-full w-screen flex flex-col">
//             <p className="text-xl font-bold text-center mb-8">Our Services</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <div className="p-4 border border-gray-200 rounded-lg shadow-md">
//                     <div className="flex items-center justify-between mb-4">
//                         <p className="text-lg font-semibold">Payment Link</p>
//                         <svg className="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M7.293 14.707a1 1 0 01-1.414-1.414l3.5-3.5a1 1 0 011.414 1.414l-3.5 3.5zM10 4a6 6 0 100 12 6 6 0 000-12zm-1 2a5 5 0 110 10 5 5 0 010-10zm-1 4a1 1 0 112 0v3a1 1 0 11-2 0v-3z" clipRule="evenodd" />
//                         </svg>
//                     </div>
//                     <p className="text-sm text-gray-600">Generate and share payment link for borderless transactions and payment transfers across all platforms. Facebook, Twitter, Instagram, WhatsApp, etc.</p>
//                     <div className="text-blue-500 mt-2 cursor-pointer">Learn More</div>
//                 </div>
//                 <div className="p-4 border border-gray-200 rounded-lg shadow-md">
//                     <div className="flex items-center justify-between mb-4">
//                         <p className="text-lg font-semibold">Ecrow Account</p>
//                         <svg className="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M7.293 14.707a1 1 0 01-1.414-1.414l3.5-3.5a1 1 0 011.414 1.414l-3.5 3.5zM10 4a6 6 0 100 12 6 6 0 000-12zm-1 2a5 5 0 110 10 5 5 0 010-10zm-1 4a1 1 0 112 0v3a1 1 0 11-2 0v-3z" clipRule="evenodd" />
//                         </svg>
//                     </div>
//                     <p className="text-sm text-gray-600">Where your money stays safe. An escrow account in your name helps you monitor payments in real time, initiate cashouts anytime and concretize trust between you and your customers.</p>
//                     <div className="text-blue-500 mt-2 cursor-pointer">Learn More</div>
//                 </div>
//                 <div className="p-4 border border-gray-200 rounded-lg shadow-md">
//                     <div className="flex items-center justify-between mb-4">
//                         <p className="text-lg font-semibold">Reverse Payment</p>
//                         <svg className="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M7.293 14.707a1 1 0 01-1.414-1.414l3.5-3.5a1 1 0 011.414 1.414l-3.5 3.5zM10 4a6 6 0 100 12 6 6 0 000-12zm-1 2a5 5 0 110 10 5 5 0 010-10zm-1 4a1 1 0 112 0v3a1 1 0 11-2 0v-3z" clipRule="evenodd" />
//                         </svg>
//                     </div>
//                     <p className="text-sm text-gray-600">Reverse fiat and crypto payments made to any merchant at any point in time. With our dynamic network of partner banks and payment systems, we'll process your refund immediately.</p>
//                     <div className="text-blue-500 mt-2 cursor-pointer">Learn More</div>
//                 </div>
//             </div>

//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8" onClick={getSignUp}>Get Started</button>
//         </section>
//     );
// };

// export default Services;


import React from "react";
import style from "./Services.module.css"
import { useNavigate } from "react-router-dom";


const Services = () => {
    const navigate = useNavigate();

    const getSignUp = () => {
        navigate('/logistics');     
    };

    const logistics = () => {
        navigate('/logistics');     
    };

    return (

        <section className="container mx-auto h-full w-screen flex flex-col">
            <p className={style.service}>Our Services</p>

            <div className={style.listContainer}>
                <div className={style.row1}>
                    <div className={style.linkContainer}>
                        <div className={style.link}>
                            <p>Payment Link</p>

                            <div className={style.svgContainer}>
                                <svg className={style.svg1} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#0887ef" />
                                </svg>
                                <svg className={style.svg2} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.6489 28.5539C24.5846 28.4903 24.4979 28.4546 24.4075 28.4546C24.3171 28.4546 24.2303 28.4903 24.1661 28.5539L19.2015 33.5185C16.9029 35.8171 13.0235 36.0606 10.4857 33.5185C7.94354 30.9764 8.18707 27.1013 10.4857 24.8027L15.4503 19.8381C15.5827 19.7056 15.5827 19.4877 15.4503 19.3553L13.7498 17.6548C13.6856 17.5912 13.5988 17.5556 13.5084 17.5556C13.418 17.5556 13.3313 17.5912 13.267 17.6548L8.30243 22.6194C4.68793 26.2339 4.68793 32.0829 8.30243 35.6932C11.9169 39.3034 17.7659 39.3077 21.3762 35.6932L26.3408 30.7286C26.4732 30.5961 26.4732 30.3782 26.3408 30.2458L24.6489 28.5539ZM35.6975 8.30243C32.0829 4.68793 26.2339 4.68793 22.6237 8.30243L17.6548 13.267C17.5912 13.3313 17.5556 13.418 17.5556 13.5084C17.5556 13.5988 17.5912 13.6856 17.6548 13.7498L19.351 15.446C19.4835 15.5784 19.7014 15.5784 19.8338 15.446L24.7984 10.4814C27.097 8.1828 30.9764 7.93927 33.5142 10.4814C36.0563 13.0235 35.8128 16.8986 33.5142 19.1972L28.5496 24.1618C28.486 24.226 28.4503 24.3128 28.4503 24.4032C28.4503 24.4936 28.486 24.5804 28.5496 24.6446L30.2501 26.345C30.3825 26.4775 30.6004 26.4775 30.7329 26.345L35.6975 21.3804C39.3077 17.7659 39.3077 11.9169 35.6975 8.30243ZM26.1912 16.0313C26.127 15.9677 26.0402 15.932 25.9498 15.932C25.8594 15.932 25.7727 15.9677 25.7084 16.0313L16.0313 25.7042C15.9677 25.7684 15.932 25.8552 15.932 25.9456C15.932 26.036 15.9677 26.1227 16.0313 26.187L17.7232 27.8788C17.8557 28.0113 18.0736 28.0113 18.206 27.8788L27.8788 18.206C28.0113 18.0735 28.0113 17.8557 27.8788 17.7232L26.1912 16.0313Z" fill="#f6f8fa" />
                                </svg>
                            </div>
                        </div>

                        <div className={style.description}>
                            <p>Generate and share payment link for borderless
                                transactions and payment transfers across all platforms.
                                Facebook, Twitter, Instagram, WhatsApp, etc.
                            </p>

                            <div className={style.moreContainer}>Learn More
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#0887ef" />
                                    <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#0887ef" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className={style.linkContainer}>
                        <div className={style.escrow}>
                            <p>Ecrow Account</p>

                            <div className={style.svgContainer}>
                                <svg className={style.svg1} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#0887ef" />
                                </svg>
                                <svg className={style.svg2} width="44" height="44" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.0669 41.1301C22.0427 41.1394 22.0204 41.1478 22 41.1555C21.9796 41.1478 21.9573 41.1394 21.9332 41.1301C21.7796 41.0712 21.5525 40.9805 21.2639 40.8551C20.6864 40.6043 19.8635 40.2151 18.8908 39.6647C16.9441 38.5634 14.4051 36.8211 12.0329 34.2582C7.36117 29.2107 3.29622 20.94 5.76598 7.97474C10.5745 8.62768 13.5835 8.35165 15.9559 7.37723C18.0562 6.51458 19.6214 5.11178 21.4518 3.47138C21.6317 3.31012 21.8142 3.14656 22 2.981C22.1858 3.14657 22.3683 3.31013 22.5483 3.47139C24.3786 5.11179 25.9438 6.51458 28.0441 7.37723C30.4166 8.35165 33.4255 8.62768 38.234 7.97474C40.7038 20.94 36.6389 29.2107 31.9671 34.2582C29.595 36.8211 27.0559 38.5634 25.1093 39.6647C24.1365 40.2151 23.3136 40.6043 22.7362 40.8551C22.4475 40.9805 22.2204 41.0712 22.0669 41.1301ZM27.177 29.681L28.074 30.1525L27.9025 29.1538L26.9123 23.3886L31.099 19.3087L31.8249 18.6013L30.8218 18.4558L25.0358 17.6164L22.4484 12.3725L22 11.4638L21.5516 12.3725L18.9642 17.6164L13.1782 18.4558L12.1755 18.6013L12.901 19.3086L17.0878 23.3908L16.0997 29.1539L15.9285 30.1526L16.8252 29.681L22.0001 26.9596L27.177 29.681Z" fill="#f6f8fa" />

                                </svg>
                            </div>
                        </div>

                        <div className={style.description}>
                            <p>Where your money stays safe. An escrow account in your name
                                helps you monitor payments in real time, initiate cashouts
                                anytime and concretize trust between you and your customers.
                            </p>

                            <div className={style.moreContainer}>Learn More
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#0887ef" />
                                    <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#0887ef" />
                                </svg>
                            </div>
                        </div>

                    </div>

                    <div className={style.linkContainer}>
                        <div className={style.reverse}>
                            <p>Reverse Payment</p>

                            <div className={style.svgContainer}>
                                <svg className={style.svg1} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#0887ef" />
                                </svg>
                                <svg className={style.svg2} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8672 20.1771L5.59375 27.4688L12.8672 34.7605V29.2917H25.6458V25.6459H12.8672V20.1771ZM38.4062 16.5313L31.1328 9.23962V14.7084H18.3542V18.3542H31.1328V23.823L38.4062 16.5313Z" fill="#f6f8fa" />

                                </svg>
                            </div>
                        </div>

                        <div className={style.description}>
                            <p>Reverse fiat and crypto payments made to any escrow account on Tranxactrust
                                if your vendor fails to deliver your products within the agreed time frame.
                            </p>

                            <div className={style.moreContainer}>Learn More
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#0887ef" />
                                    <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#0887ef" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.row1}>
                    <div className={style.linkContainer}>
                        <div className={style.delivery}>
                            <p className={style.edp}>Cordinated Delivery</p>

                        {/* <div className={style.crypto}>
                            <p>Crypto Payment</p> */}

                            <div className={style.svgContainer}>
                            <svg className={style.svg1} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#0887ef" />
                                </svg>
                                <svg className={style.svg2} width="44" height="44" viewBox="0 0 38 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.0312 22.834L36.9297 13.2637C36.825 13.0166 36.6499 12.8057 36.4263 12.6574C36.2026 12.5091 35.9402 12.4299 35.6719 12.4297H31.5703V9.69531C31.5703 9.33271 31.4263 8.98496 31.1699 8.72857C30.9135 8.47217 30.5657 8.32812 30.2031 8.32812H4.22656C3.86396 8.32812 3.51621 8.47217 3.25981 8.72857C3.00342 8.98496 2.85938 9.33271 2.85938 9.69531V32.9375C2.85938 33.3001 3.00342 33.6479 3.25981 33.9043C3.51621 34.1606 3.86396 34.3047 4.22656 34.3047H7.15234C7.46718 35.4632 8.15449 36.4859 9.10824 37.2151C10.062 37.9442 11.2292 38.3393 12.4297 38.3393C13.6302 38.3393 14.7974 37.9442 15.7511 37.2151C16.7049 36.4859 17.3922 35.4632 17.707 34.3047H26.293C26.6078 35.4632 27.2951 36.4859 28.2489 37.2151C29.2026 37.9442 30.3698 38.3393 31.5703 38.3393C32.7708 38.3393 33.938 37.9442 34.8918 37.2151C35.8455 36.4859 36.5328 35.4632 36.8477 34.3047H39.7734C40.136 34.3047 40.4838 34.1606 40.7402 33.9043C40.9966 33.6479 41.1406 33.3001 41.1406 32.9375V23.3672C41.1403 23.1839 41.1031 23.0026 41.0312 22.834ZM31.5703 15.1641H34.7695L37.6953 22H31.5703V15.1641ZM12.4297 35.6719C11.8889 35.6719 11.3602 35.5115 10.9106 35.2111C10.4609 34.9106 10.1104 34.4835 9.90345 33.9839C9.6965 33.4843 9.64235 32.9345 9.74785 32.4041C9.85336 31.8736 10.1138 31.3864 10.4962 31.004C10.8786 30.6216 11.3658 30.3612 11.8962 30.2557C12.4267 30.1502 12.9764 30.2043 13.4761 30.4113C13.9757 30.6182 14.4028 30.9687 14.7032 31.4184C15.0037 31.868 15.1641 32.3967 15.1641 32.9375C15.1641 33.6627 14.876 34.3582 14.3632 34.871C13.8504 35.3838 13.1549 35.6719 12.4297 35.6719ZM26.293 31.5703H17.707C17.3922 30.4118 16.7049 29.3891 15.7511 28.6599C14.7974 27.9308 13.6302 27.5357 12.4297 27.5357C11.2292 27.5357 10.062 27.9308 9.10824 28.6599C8.15449 29.3891 7.46718 30.4118 7.15234 31.5703H5.59375V11.0625H28.8359V28.2344C28.2134 28.5957 27.6683 29.0764 27.2319 29.6488C26.7955 30.2213 26.4764 30.8743 26.293 31.5703ZM31.5703 35.6719C31.0295 35.6719 30.5008 35.5115 30.0512 35.2111C29.6015 34.9106 29.251 34.4835 29.0441 33.9839C28.8371 33.4843 28.783 32.9345 28.8885 32.4041C28.994 31.8736 29.2544 31.3864 29.6368 31.004C30.0192 30.6216 30.5064 30.3612 31.0369 30.2557C31.5673 30.1502 32.1171 30.2043 32.6167 30.4113C33.1164 30.6182 33.5434 30.9687 33.8439 31.4184C34.1443 31.868 34.3047 32.3967 34.3047 32.9375C34.3047 33.6627 34.0166 34.3582 33.5038 34.871C32.991 35.3838 32.2955 35.6719 31.5703 35.6719ZM38.4062 31.5703H36.8477C36.5453 30.3994 35.8634 29.3616 34.9085 28.6195C33.9536 27.8774 32.7797 27.4727 31.5703 27.4688V24.7344H38.4062V31.5703Z" fill="#f6f8fa" />
                                </svg>
                                {/* <svg className={style.svg1} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#0887ef" />
                                </svg>
                                <svg className={style.svg1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50" fill="#3498db">
                                    <rect x="10" y="10" width="30" height="30" fill="#f6f8fa" />
                                    <line x1="15" y1="25" x2="35" y2="25" stroke="#0887ef" strokeWidth="4" />
                                    <line x1="25" y1="15" x2="25" y2="35" stroke="#0887ef" strokeWidth="4" />
                                    <circle cx="25" cy="25" r="5" fill="#0887ef" />
                                </svg> */}
                            </div>
                        </div>

                        {/* <div className={style.description}> */}
                            {/* <p>Exchange local currency to crypto and pay
                                your vendor in seconds. Receive bitcoin, ethereum, USDT and
                                convert to your local curency for withdrawal.
                            </p> */}
                            <div className={style.description}>
                            <p> Delivery is as important to online shoppers as payment
                                is for businesses. We use a simple delivery capacity clearance
                                process to help win your customers' trust. Synchronise
                                payment and product delivery on your Tranxactrust account now.
                                
                            </p>

                            <div className={style.moreContainer}>Learn More
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#0887ef" />
                                    <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#0887ef" />
                                </svg>
                            </div>
                        </div>
                    </div>



                    <div className={style.linkContainer}>
                        <div className={style.support}>
                            <p>24/7 Support</p>

                            <div className={style.svgContainer1}>
                                <svg className={style.svg1} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#0887ef" />
                                </svg>
                                <svg className={style.svg3} width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_54_154)">
                                        <path d="M3.8 6.33333V5.06667C3.50728 5.06684 3.22366 5.1684 2.99736 5.35406C2.77105 5.53972 2.61604 5.79803 2.55867 6.08507L3.8 6.33333ZM34.2 6.33333L35.4413 6.08507C35.384 5.79803 35.2289 5.53972 35.0026 5.35406C34.7763 5.1684 34.4927 5.06684 34.2 5.06667V6.33333ZM36.7333 19V20.2667C36.9207 20.2666 37.1056 20.2249 37.2749 20.1447C37.4442 20.0645 37.5936 19.9477 37.7123 19.8028C37.8311 19.6579 37.9162 19.4885 37.9615 19.3067C38.0069 19.125 38.0114 18.9354 37.9747 18.7517L36.7333 19ZM1.26667 19L0.0253333 18.7517C-0.0113832 18.9354 -0.00689819 19.125 0.0384651 19.3067C0.0838284 19.4885 0.168941 19.6579 0.28767 19.8028C0.406399 19.9477 0.555789 20.0645 0.725078 20.1447C0.894366 20.2249 1.07934 20.2666 1.26667 20.2667V19ZM8.86667 26.6H7.6V27.8667H8.86667V26.6ZM29.1333 26.6V27.8667H30.4V26.6H29.1333ZM0 38H38V35.4667H0V38ZM2.53333 19V36.7333H5.06667V19H2.53333ZM32.9333 19V36.7333H35.4667V19H32.9333ZM3.8 7.6H34.2V5.06667H3.8V7.6ZM32.9587 6.5816L35.492 19.2483L37.9747 18.7517L35.4413 6.08507L32.9587 6.5816ZM36.7333 17.7333H1.26667V20.2667H36.7333V17.7333ZM2.508 19.2483L5.04133 6.5816L2.55867 6.08507L0.0253333 18.7517L2.508 19.2483ZM2.53333 2.53333H35.4667V0H2.53333V2.53333ZM7.6 19V26.6H10.1333V19H7.6ZM8.86667 27.8667H29.1333V25.3333H8.86667V27.8667ZM30.4 26.6V19H27.8667V26.6H30.4Z" fill="#f6f8fa" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_54_154">
                                            <rect width="38" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div className={style.description}>
                            <p>Support is available every minute of the day.
                                Our focus on continuous improvement and monitoring ensures
                                that we can deliver all services at a consistently high quality
                                level. Through our disciplined and automated processes,
                                Tranxactrust consistently achieves 95% and higher customer
                                satisfaction ratings, 98% SLA achievement, and 99% first time fix
                                performance.
                            </p>

                            <div className={style.moreContainer}>Get Support
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#0887ef" />
                                    <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#0887ef" />
                                </svg>
                            </div>
                        </div>
                    </div>


                    <div className={style.linkContainer}>
                        <div className={style.apiDocument}>
                            <p className={style.api}>API Documents for Developers</p>

                            <div className={style.svgContainer1}>
                                <svg className={style.svg1} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35" r="35" fill="#0887ef" />
                                </svg>
                                <svg className={style.svg2} width="44" height="44" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.6719 30.2031C34.7063 30.2078 33.7605 30.4774 32.9375 30.9824L28.7129 26.7441C29.6959 25.3575 30.2239 23.6997 30.2239 22C30.2239 20.3003 29.6959 18.6425 28.7129 17.2559L32.9375 13.0176C33.7605 13.5226 34.7063 13.7922 35.6719 13.7969C36.7535 13.7969 37.8108 13.4761 38.7102 12.8752C39.6095 12.2743 40.3104 11.4202 40.7243 10.4209C41.1383 9.42164 41.2466 8.32206 41.0355 7.26123C40.8245 6.20039 40.3037 5.22596 39.5389 4.46114C38.7741 3.69632 37.7996 3.17547 36.7388 2.96446C35.6779 2.75345 34.5784 2.86174 33.5791 3.27566C32.5798 3.68958 31.7257 4.39052 31.1248 5.28985C30.5239 6.18918 30.2031 7.24651 30.2031 8.32813C30.2078 9.29372 30.4774 10.2395 30.9824 11.0625L26.7441 15.2871C25.3575 14.3041 23.6997 13.7761 22 13.7761C20.3003 13.7761 18.6425 14.3041 17.2559 15.2871L13.0176 11.0625C13.5226 10.2395 13.7922 9.29372 13.7969 8.32813C13.7969 7.24651 13.4761 6.18918 12.8752 5.28985C12.2743 4.39052 11.4202 3.68958 10.4209 3.27566C9.42164 2.86174 8.32206 2.75345 7.26123 2.96446C6.20039 3.17547 5.22596 3.69632 4.46114 4.46114C3.69632 5.22596 3.17547 6.20039 2.96446 7.26123C2.75345 8.32206 2.86174 9.42164 3.27566 10.4209C3.68958 11.4202 4.39052 12.2743 5.28985 12.8752C6.18918 13.4761 7.24651 13.7969 8.32813 13.7969C9.29372 13.7922 10.2395 13.5226 11.0625 13.0176L15.2871 17.2559C14.3041 18.6425 13.7761 20.3003 13.7761 22C13.7761 23.6997 14.3041 25.3575 15.2871 26.7441L11.0625 30.9824C10.2395 30.4774 9.29372 30.2078 8.32813 30.2031C7.24651 30.2031 6.18918 30.5239 5.28985 31.1248C4.39052 31.7257 3.68958 32.5798 3.27566 33.5791C2.86174 34.5784 2.75345 35.6779 2.96446 36.7388C3.17547 37.7996 3.69632 38.7741 4.46114 39.5389C5.22596 40.3037 6.20039 40.8245 7.26123 41.0355C8.32206 41.2466 9.42164 41.1383 10.4209 40.7243C11.4202 40.3104 12.2743 39.6095 12.8752 38.7102C13.4761 37.8108 13.7969 36.7535 13.7969 35.6719C13.7922 34.7063 13.5226 33.7605 13.0176 32.9375L17.2559 28.7129C18.6425 29.6959 20.3003 30.2239 22 30.2239C23.6997 30.2239 25.3575 29.6959 26.7441 28.7129L30.9824 32.9375C30.4774 33.7605 30.2078 34.7063 30.2031 35.6719C30.2031 36.7535 30.5239 37.8108 31.1248 38.7102C31.7257 39.6095 32.5798 40.3104 33.5791 40.7243C34.5784 41.1383 35.6779 41.2466 36.7388 41.0355C37.7996 40.8245 38.7741 40.3037 39.5389 39.5389C40.3037 38.7741 40.8245 37.7996 41.0355 36.7388C41.2466 35.6779 41.1383 34.5784 40.7243 33.5791C40.3104 32.5798 39.6095 31.7257 38.7102 31.1248C37.8108 30.5239 36.7535 30.2031 35.6719 30.2031ZM35.6719 5.59375C36.2127 5.59375 36.7414 5.75412 37.191 6.05458C37.6407 6.35504 37.9912 6.78209 38.1981 7.28173C38.4051 7.78137 38.4592 8.33116 38.3537 8.86158C38.2482 9.39199 37.9878 9.87921 37.6054 10.2616C37.223 10.644 36.7357 10.9045 36.2053 11.01C35.6749 11.1155 35.1251 11.0613 34.6255 10.8544C34.1258 10.6474 33.6988 10.2969 33.3983 9.84727C33.0979 9.3976 32.9375 8.86894 32.9375 8.32813C32.9375 7.60293 33.2256 6.90743 33.7384 6.39463C34.2512 5.88184 34.9467 5.59375 35.6719 5.59375ZM5.59375 8.32813C5.59375 7.78732 5.75412 7.25866 6.05458 6.80899C6.35504 6.35932 6.78209 6.00885 7.28173 5.80189C7.78137 5.59494 8.33116 5.54079 8.86158 5.64629C9.39199 5.7518 9.87921 6.01222 10.2616 6.39463C10.644 6.77704 10.9045 7.26426 11.01 7.79468C11.1155 8.32509 11.0613 8.87489 10.8544 9.37453C10.6474 9.87417 10.2969 10.3012 9.84727 10.6017C9.3976 10.9021 8.86894 11.0625 8.32813 11.0625C7.60293 11.0625 6.90743 10.7744 6.39463 10.2616C5.88184 9.74883 5.59375 9.05333 5.59375 8.32813ZM8.32813 38.4063C7.78732 38.4063 7.25866 38.2459 6.80899 37.9454C6.35932 37.645 6.00885 37.2179 5.80189 36.7183C5.59494 36.2186 5.54079 35.6688 5.64629 35.1384C5.7518 34.608 6.01222 34.1208 6.39463 33.7384C6.77704 33.356 7.26426 33.0956 7.79468 32.99C8.32509 32.8845 8.87489 32.9387 9.37453 33.1456C9.87417 33.3526 10.3012 33.7031 10.6017 34.1527C10.9021 34.6024 11.0625 35.1311 11.0625 35.6719C11.0625 36.3971 10.7744 37.0926 10.2616 37.6054C9.74883 38.1182 9.05333 38.4063 8.32813 38.4063ZM22 27.4688C20.9184 27.4688 19.8611 27.148 18.9617 26.5471C18.0624 25.9462 17.3615 25.0921 16.9475 24.0928C16.5336 23.0935 16.4253 21.9939 16.6363 20.9331C16.8473 19.8723 17.3682 18.8978 18.133 18.133C18.8978 17.3682 19.8723 16.8473 20.9331 16.6363C21.9939 16.4253 23.0935 16.5336 24.0928 16.9475C25.0921 17.3615 25.9462 18.0624 26.5471 18.9617C27.148 19.8611 27.4688 20.9184 27.4688 22C27.4688 23.4504 26.8926 24.8414 25.867 25.867C24.8414 26.8926 23.4504 27.4688 22 27.4688ZM35.6719 38.4063C35.1311 38.4063 34.6024 38.2459 34.1527 37.9454C33.7031 37.645 33.3526 37.2179 33.1456 36.7183C32.9387 36.2186 32.8845 35.6688 32.99 35.1384C33.0956 34.608 33.356 34.1208 33.7384 33.7384C34.1208 33.356 34.608 33.0956 35.1384 32.99C35.6688 32.8845 36.2186 32.9387 36.7183 33.1456C37.2179 33.3526 37.645 33.7031 37.9454 34.1527C38.2459 34.6024 38.4063 35.1311 38.4063 35.6719C38.4063 36.3971 38.1182 37.0926 37.6054 37.6054C37.0926 38.1182 36.3971 38.4063 35.6719 38.4063Z" fill="#f6f8fa" />
                                </svg>

                            </div>
                        </div>

                        <div className={style.description}>
                            <p>Our APIs are easy to integrate and provide multiple
                                payment features. With our core payment integration and abstraction, your
                                team can easily proceed to integrate with our API and access several of
                                our avaiable payment tools.
                            </p>

                            <div className={style.moreContainer}>Learn More
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#0887ef" />
                                    <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#0887ef" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50" fill="#3498db">
                    <rect x="10" y="10" width="30" height="30" fill="#1e6af7" />
                
                    <line x1="15" y1="25" x2="35" y2="25" stroke="#f6f8fa" strokeWidth="4" />
                    <line x1="25" y1="15" x2="25" y2="35" stroke="#f6f8fa" strokeWidth="4" />
                    <circle cx="25" cy="25" r="5" fill="#2ecc71" />
                </svg> */}






                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50" fill="#3498db">
                    <rect x="10" y="10" width="30" height="30" fill="#1e6af7" />
                
                    <rect x="15" y="15" width="5" height="5" fill="#f6f8fa" />
                    <rect x="25" y="15" width="5" height="5" fill="#f6f8fa" />
                    <rect x="35" y="15" width="5" height="5" fill="#f6f8fa" />
                
                    <rect x="15" y="25" width="5" height="5" fill="#f6f8fa" />
                    <rect x="25" y="25" width="5" height="5" fill="#f6f8fa" />
                    <rect x="35" y="25" width="5" height="5" fill="#f6f8fa" />
                
                    <rect x="15" y="35" width="5" height="5" fill="#f6f8fa" />
                    <rect x="25" y="35" width="5" height="5" fill="#f6f8fa" />
                    <rect x="35" y="35" width="5" height="5" fill="#f6f8fa" />
                </svg> */}

            </div>
        </section>
    )
}

export default Services;


