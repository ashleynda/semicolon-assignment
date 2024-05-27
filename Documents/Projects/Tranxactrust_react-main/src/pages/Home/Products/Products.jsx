// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import photo from "../../../images/payment-photo.png";
// import house from "../../../images/house-frame-removebg-preview.png";
// import property from "../../../images/property.png";
// import shopKeeper from "../../../images/Store Keeper.png";
// import coin from "../../../images/Crypto.png";

// const Products = () => {
//     const navigate = useNavigate();

//     const getProducts = () => {
//         navigate('/signup');
//     };

//     const openShop = () => {
//         navigate('/shop');
//     };

//     const goInvest = () => {
//         navigate('/investrust');
//     };

//     return (
//         <section className="container mx-auto h-full w-screen flex flex-col">
//             <div className="text-center">
//                 <p>Unlocking payment barriers <span className="text-blue-500">for Businesses</span></p>
//                 <p className="text-gray-500">Regardless of the size of your business, our payment tools are designed to keep it scaling.</p>
//             </div>

//             <div className="flex justify-around items-center">
//                 <div className="flex flex-col items-center">
//                     <span className="text-blue-500">Trustmonie</span>
//                     <p className="text-gray-500">Dealing with trust issues is inevitable when selling to strangers on social media or anywhere. With Trustmonie, you get direct and escrow accounts in one <Link to="/trustmonie" className="text-blue-500">Sign Up.</Link> A double-in-one account offers the flexible options to accept direct or escrow payments and win customer trust.</p>
//                     <button onClick={getProducts} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">Sign Up Now</button>
//                     <img className="mt-4" src={photo} alt="payment image" />
//                 </div>

//                 <div className="flex flex-col items-center">
//                     <span className="text-blue-500">Shop</span>
//                     <p className="text-gray-500">Stay ever closer to thousands of shoppers paying on Tranxactrust. Open your one-stop online Shop on our marketplace and start selling to new customers globally.</p>
//                     <button onClick={openShop} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">Go Shopping</button>
//                     <img src={shopKeeper} className="mt-4" alt="Store Keeper" />
//                 </div>

//                 <div className="flex flex-col items-center">
//                     <span className="text-blue-500">Investrust</span>
//                     <p className="text-gray-500">Investrust is designed for local and cross border payment for real estate investors. With a fully escrow-powered payment processor, it is easier to guarantee your clients payment protection.</p>
//                     <button onClick={goInvest} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">Start Investing</button>
//                     <img className="mt-4" src={property} alt="house" />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Products;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import photo from "../../../images/payment-photo.png";
import style from "./Products.module.css";
import house from "../../../images/house-frame-removebg-preview.png";
import property from "../../../images/property.png";
import shopKeeper from "../../../images/Store Keeper.png";
import coin from "../../../images/Crypto.png";


const Products = () => {
    const navigate = useNavigate();

    const getProducts = () => {
        navigate('/signup');
    };

    const openShop = () => {
        navigate('/shop');
    };

    const goInvest = () => {
        navigate('/investrust')
    }

    return (
        <section className="container mx-auto h-full w-screen flex flex-col">
            <div className={style.barrier1}>
                <p>Unlocking payment barriers
                <span className={style.span1}> for Businesses</span></p>

                <p className={style.trust2}>Regardless of the size of your business,
                    our payment tools are designed to keep it scaling.
                </p>
            </div>


            <div className={style.paymentIntro}>
                <div className={style.paycolumn}>
                    {/* <span className={style.monie}> */}
                        Trustmonie
                    {/* </span> */}

                    <p className={style.monie1}>Dealing with trust issues is inevitable
                        when selling to strangers on social media or anywhere.
                        With Trustmonie, you get direct and escrow accounts in one
                        <Link to={'/signup'} className={style.update} > Sign Up. </Link>
                        A double-in-one account offers the flexible options to
                        accept direct or escrow payments and win customer trust.</p>

                    <Link to={'/trustmonie'} className={style.moreContainer} > Sign Up Now
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#0887ef" />
                            <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#0887ef" />
                        </svg>
                    </Link>

                    <img className={style.pay} src={photo} alt="payment image" />
                
                    {/* <div className={style.paycolumn}> */}
                        {/* <span className={style.monie}> */}
                            Shop
                        {/* </span> */}
                        {/* <div className={style.shopFlexer}> */}

                            <p className={style.monie1}>Stay ever closer to thousands of shoppers paying on
                                Tranxactrust. Open your one-stop online Shop on our marketplace
                                and start selling to new customers globally.
                            </p>
                            <img src={shopKeeper} className={style.store} alt="Store Keeper" />
                        {/* </div> */}

                        <Link to={'/shop'} className={style.moreContainer} > Go Shopping

                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#0887ef" />
                                <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#0887ef" />
                            </svg>
                        </Link>
                    {/* </div> */}
                </div>

                    {/* <span className={style.monie}>TrxtPay</span>

                    <p className={style.monie1}>Stay ahead of others and start accepting crypto payment.
                        Convert fiat to Ethereum, Bitcoin and USDT. TrxtPay enables gasless
                        transactions for merchant and individuals.You also get direct and
                        escrow crypto wallets in one <Link to={'/trxtpay'} className="update" > Sign Up. </Link>

                    </p>

                    <Link to={'/trxtpay'} className={style.moreContainer} > Sign Up Now

                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#0887ef" />
                            <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#0887ef" />
                        </svg>
                    </Link> */}

                {/* </div> */}

                <div className={style.paycolumn}>
                    {/* <span className={style.monie}> */}
                        Investrust
                    {/* </span> */}

                    <p className={style.monie1}>Investrust is a powerful tool for 
                        local and cross-border real estate payment. Activate your 
                        double-in-one account, access direct and escrow-powered 
                        payment options. Guarantee your clients payment protection and reversal. 
                        Let's power your business to sell more & grow beyond limit, shall we?
                    </p>

                    {/* <img className={style.pay} src={house} alt="house" /> */}
                    <img className={style.estate} src={property} alt="house" />

                    {/* <Link to={'/investrust'} className={style.moreContainer}> Start Investing */}
                    <button onClick={goInvest} className={style.account2}>Start Investing
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#FCFCFD" />
                            <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#FCFCFD" />
                        </svg>
                    </button>

                    <div className={style.unlock}>
                        <p className={style.introHeader}>Unlock your ultimate trust with escrow payment.
                            Explore the magic of its <span className={style.span2}>Reverse Payment </span>
                            possibility that inspires new customers to pay you more.
                        </p>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z" fill="#0887ef" />
                            </svg>
                            <p className={style.puncher}>No loss of control over payments and products</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z" fill="#0887ef" />
                            </svg>
                            <p className={style.puncher}>Increases customer loyalty</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z" fill="#0887ef" />
                            </svg>
                            <p className={style.puncher}>Builds customer trust on your brand</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z" fill="#0887ef" />
                            </svg>
                            <p className={style.puncher}>Payment reversal are conditional. No undue payment reversal.</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z" fill="#0887ef" />
                            </svg>
                            <p className={style.puncher}>100% fast, easy-to-use, safe and secure</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z" fill="#0887ef" />
                            </svg>
                            <p className={style.puncher}>Allows only amount paid to be reversed. Never above</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z" fill="#0887ef" />
                            </svg>
                            <p className={style.puncher}>Fastest way to increased customer conversion</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z" fill="#0887ef" />
                            </svg>
                            <p className={style.puncher}>Helps two strangers build trust for the long-term business relationship</p>
                        </div>

                        <button onClick={getProducts} className={style.account2}>Learn More
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#FCFCFD" />
                                <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#FCFCFD" />
                            </svg>
                        </button>
                    </div>
                 
                </div>


            </div>


        </section>
    );
}

export default Products