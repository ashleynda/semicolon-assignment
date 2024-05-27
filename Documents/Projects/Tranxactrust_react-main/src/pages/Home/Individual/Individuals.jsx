// import React from "react";
// import buyer from "../../../images/image 5.png"
// import { Link } from "react-router-dom";

// const Individuals = () => {
//     return (
//         <section className="container mx-auto h-full w-screen text-center flex flex-col">
//             <div className="text-left px-4">
//                 <p className="text-xl font-semibold">Unlocking boundless payment possibilities</p>
//                 <p className="mt-2">for consumers</p>
//                 <p className="mt-4">Whether you're paying to a social media vendor,
//                     or investing in real estate, Tranxactrust offers simple tools for
//                     smooth payments and protection from fraud.</p>
//             </div>

//             <div className="flex items-center justify-center mt-8">
//                 <img className="w-64" src={buyer} alt="Happy buyer" />
//                 <div className="text-left ml-4">
//                     <p className="text-xl font-semibold">Let's save the day from fraud, shall we?</p>
//                     <p className="mt-2">You get delivery or Reverse Payment when you pay into your vendor's Trustmonie escrow account.</p>
//                     <div className="mt-4 space-y-2">
//                         <div className="flex items-center space-x-2">
//                             <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <rect width="24" height="24" rx="10" fill="#EEF4FF" />
//                                 <path d="M8.8 15.9L4.6 11.7L3.2 13.1L8.8 18.7L20.8 6.7L19.4 5.3L8.8 15.9Z" fill="#6B9BFC" />
//                             </svg>
//                             <p>Full control over monies that already left your hands</p>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                             <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <rect width="24" height="24" rx="10" fill="#EEF4FF" />
//                                 <path d="M8.8 15.9L4.6 11.7L3.2 13.1L8.8 18.7L20.8 6.7L19.4 5.3L8.8 15.9Z" fill="#6B9BFC" />
//                             </svg>
//                             <p>Can reverse cash or crypto payouts</p>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                             <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <rect width="24" height="24" rx="10" fill="#EEF4FF" />
//                                 <path d="M8.8 15.9L4.6 11.7L3.2 13.1L8.8 18.7L20.8 6.7L19.4 5.3L8.8 15.9Z" fill="#6B9BFC" />
//                             </svg>
//                             <p>Send money to loved ones in seconds</p>
//                         </div>
//                     </div>
//                     <Link to={'/trustmonie'} className="mt-4 flex items-center space-x-2">
//                         <button className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
//                             Learn More
//                             <svg className="w-6 h-6" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#FCFCFD" />
//                                 <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#FCFCFD" />
//                             </svg>
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Individuals;


import React from "react";
import buyer from "../../../images/image 5.png"
import { Link } from "react-router-dom";
import style from "./Individuals.module.css";

const Individuals = () => {
    return (
        <section className="container lg:bg-slate-300 mx-auto h-full w-screen text-center flex flex-col">

            <div className={style.barrier1}>
                <p>Unlocking boundless payment possibilities
                    <span className={style.span3}>
                        <br />
                        for consumers</span>
                </p>

                <p className={style.trust2}>Whether you're paying to a social media vendor,
                    or investing in real estate, Tranxactrust offers simple tools for
                    smooth payments and protection from fraud.
                </p>
            </div>

            <div className={style.individauls}>
                <img className={style.happy} src={buyer} alt="Happy buyer" />

                <div className={style.barrier1}>
                    <div className={style.catcher}>

                        <p className={style.introHeader}>
                            Let's save the day from fraud, shall we? <br/>
                            You<span className={style.span3}> get delivery</span> or <span className={style.span3}>Reverse Payment </span>
                            when you pay into your vendor's Trustmonie escrow account.
                        </p>
                    </div>
                    <div className={style.catcher}>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path
                                    d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                    fill="#6B9BFC" />
                            </svg>
                            <p className={style.puncher}>Full control over monies that already left your hands</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path
                                    d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                    fill="#6B9BFC" />
                            </svg>
                            <p className={style.puncher}>Can reverse cash or crypto payouts</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path
                                    d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                    fill="#6B9BFC" />
                            </svg>
                            <p className={style.puncher}>Send money to loved ones in seconds</p>
                        </div>

                        <Link to={'/trustmonie'}><button className={style.account3}>Learn More
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z"
                                    fill="#FCFCFD" />
                                <path
                                    d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z"
                                    fill="#FCFCFD" />
                            </svg>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Individuals;
