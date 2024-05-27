import React from "react";
import { Link } from "react-router-dom";


const Shop = () => {
    return (
        <div>
            <div>
                <h1>Sell & shop online.
                </h1>
            </div>
            <Link to={'/signup'} class="update" >
                <h2> Sign up</h2>
            </Link>
        </div>
    )
}

export default Shop;