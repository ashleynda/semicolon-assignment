import React from "react";
import house from "../images/house-frame-removebg-preview.png";
import IntroSect from "../Reuseables/introsection/IntroSect";

const Investrust = () => {

    return (
        <IntroSect text={"Win client trust,"} imgage={house} text2={"fuel your growth"} 
        text3={"Never let trust cost you the BIG deal. Win more with Investrust. Collect direct and escrow payments in your two-in-one business account from anywhere. Pay real estate agents from anywhere and retain control over payouts."} btn={"Sign Up Now"} btn2={"Contact sales"}/>
        // <div>
        //     <div className={style.wrapper}>
        //         <section className={style.welcome}>
        //             <div className={style.unlock}>
        //             <div className={style.barrier}>
        //                     <span className={style.span}>Win customer trust, </span>
        //                     fuel your growth
        //                 </div>

        //                 <div className={style.barrier}>
        //                     <span className={style.span}>{text="Win customer trust,"} </span>
        //                     {text2="fuel your grow"}
        //                 </div>

        //                 <p className={style.trust}>{text="Accept fiat and crypto payments from anywhere. Pay vendors with a fiat or crypto account. Retain control over payouts.Never let trust cost you the deal."}
        //                 </p>

        //                 <ul>
        //                     <li className={style.button}>
        //                         <Link to={'/signup'} >
        //                             <button className={style.account}>{text="Create a free account"}</button>
        //                         </Link>
        //                         <Link to={'/signup'} >
        //                             <div className={style.contact} >{text="Contact Sales"}
        //                                 <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                                     <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#068bf7" />
        //                                     <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#068bf7" />
        //                                 </svg></div>
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </div>

        //             <div className={style.gif}>

        //                 <img src={gif} className={style.img} alt="Cinque Terre" />

        //             </div>
        //         </section>
        //     </div>
          
        // </div>
    );

};

export default Investrust;