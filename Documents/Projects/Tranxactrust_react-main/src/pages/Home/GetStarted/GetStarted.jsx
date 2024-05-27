// import React from "react";
// import { useNavigate } from "react-router-dom";
// import style from "./GetStarted.module.css";

// const GetStarted = () => {
//     const waitlist = useNavigate();

//     const getWaitList = () => {
//         const formUrl = 'https://forms.gle/2LnAfxc3pTJu6kmC8';
//         window.open(formUrl, "_blank");
//     };

//     return (
//         <section className={style.getStarted}>
//             <div className="max-w-4xl mx-auto py-8 text-center">
//                 <div className={style.ready}>Ready to get started?</div>
//                 <div className={style.waitlist}>Join our Waitlist</div>

//                 <div className={style.getAccess}>
//                     <p className={style.getAccess}>Be the earliest to access our product and offer your customers the ultimate freedom of payment for your beautiful products and services.</p>
//                     <div className="flex flex-wrap justify-center items-center">
//                         <div className={style.ticker}>
//                             <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <rect width="24" height="24" rx="10" fill="#EEF4FF" />
//                                 <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z" fill="#6B9BFC" />
//                             </svg>
//                             <p className={style.puncher1}>Fast</p>
//                         </div>

//                         <div className={style.ticker}>
//                             <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <rect width="24" height="24" rx="10" fill="#EEF4FF" />
//                                 <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z" fill="#6B9BFC" />
//                             </svg>
//                             <p className={style.puncher1}>Easy</p>
//                         </div>

//                         <div className={style.ticker}>
//                             <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <rect width="24" height="24" rx="10" fill="#EEF4FF" />
//                                 <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z" fill="#6B9BFC" />
//                             </svg>
//                             <p className={style.puncher1}>Safe</p>
//                         </div>

//                         <div className={style.ticker}>
//                             <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <rect width="24" height="24" rx="10" fill="#EEF4FF" />
//                                 <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z" fill="#6B9BFC" />
//                             </svg>
//                             <p className={style.puncher1}>Secure</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div id="submitEmail" className="mt-4">
//                     <div className={style.inputContainer}>
//                         <input
//                             type="text"
//                             id="email"
//                             className={style.email}
//                             name="email"
//                             placeholder="submit your email here"
//                             required
//                         />
//                         <svg
//                             className={style.joinIcon}
//                             width="18"
//                             height="18"
//                             viewBox="0 0 18 18"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             onClick={() => getWaitList()}
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z"
//                                 fill="white"
//                             />
//                         </svg>
//                     </div>

//                     <div className="mt-4 flex justify-center">
//                         <p className={style.start} onClick={getWaitList}>Get Started</p>
//                         <a href="#" className={style.get1}>Contact Sales</a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default GetStarted;


import React from "react";
import WaitListForm from "../../../Api/WaitListForm";
import { useNavigate } from "react-router-dom";
import style from "./GetStarted.module.css";
// import WaitListForm from "../Api/WaitListForm";


const GetStarted = () => {
    const waitlist = useNavigate();

    const getWaitList = () => {
        const formUrl = 'https://forms.gle/2LnAfxc3pTJu6kmC8';

        window.open(formUrl, "_blank");
        // WaitListForm(waitlist);
    }
    return (
        // <main>
        <section className="container p-5 bg-[#082bef] rounded-2xl w-11/12 hover:bg-orange-500 block shadow-xl ring-1 ring-slate-900/5">
            <div className={style.ready}>Ready to get started?</div>
            <div className={style.waitlist}>Join our Waitlist</div>

            <div className={style.getAccess}>
                {/* <p className={style.getAccess}>Sign up now and activate trust on your business brand
                    and offer your customers the ultimate freedom
                    of payment for your beautiful products and services.
                </p> */}

                <p className={style.getAccess}>Be the earliest to access our
                    product and offer your customers the ultimate freedom
                    of payment for your beautiful products and services.
                </p>

                <div className={style.catcher}>
                    <div className={style.ticker}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                            <path
                                d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                fill="#6B9BFC" />
                        </svg>
                        <p className={style.puncher1}>Fast</p>
                    </div>

                    <div className={style.ticker}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                            <path
                                d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                fill="#6B9BFC" />
                        </svg>
                        <p className={style.puncher1}>Easy</p>
                    </div>
                </div>

                <div className={style.catcher}>
                    <div className={style.ticker}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                            <path
                                d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                fill="#6B9BFC" />
                        </svg>
                        <p className={style.puncher1}>Safe</p>
                    </div>

                    <div className={style.ticker}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                            <path
                                d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                fill="#6B9BFC" />
                        </svg>
                        <p className={style.puncher1}>Secure</p>
                    </div>
                </div>
            </div>
            {/* </div> */}

            <div id="submitEmail">
                <div className={style.inputContainer}>
                    <input
                        type="text"
                        id="email"
                        className={style.email}
                        name="email"
                        placeholder="submit your email here"
                        required
                    />
                    <svg
                        className={style.joinIcon}
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => getWaitList()}
                    >
                        <g clipPath="url(#clip0_1697_89)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1697_89">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className={style.get}>
                    <p type="button" className={style.start} onClick={getWaitList}>Get
                        Started</p>

                    <a href="#" className={style.get1}>Contact Sales
                        <svg className={style.pointer} width="35" height="35" viewBox="0 0 35 35" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z"
                                fill="white" />
                            <path
                                d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        // </main>
    );

}


export default GetStarted;
