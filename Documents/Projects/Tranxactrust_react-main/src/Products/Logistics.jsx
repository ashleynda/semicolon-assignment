import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer/Footer";



const Logistics = () => {
    return(
        <div>
            <h1>
                Synchronize payment and delivery.
            </h1>
            <Link to={'/logistics'} className="update">
                <h2>
                    Sign up now
                </h2>
            </Link>

            <div>
                <Footer />
            </div>
        </div>
    );
}


export default Logistics;