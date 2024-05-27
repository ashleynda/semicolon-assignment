import React from "react";
import Footer from "../Component/Footer/Footer";
import { Link } from "react-router-dom";


const Trxtpay = () => {
    return(
        <div>
            <h1>
                Send and receive crypto
            </h1>
            <Link to={'/signup'} className="update">
                <h2> Sign up</h2>
            </Link>

            <div>
                <Footer />
            </div>
        </div>
    );
}


export default Trxtpay;