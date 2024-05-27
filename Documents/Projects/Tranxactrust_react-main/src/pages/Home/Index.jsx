import React from "react";
import Intro from "./Intro/Intro";
import Brands from "./Brands/Brands";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Delivery from "./Delivery/Delivery";
import Individuals from "./Individual/Individuals";
import Choose from "./Choose/Choose";
import GetStarted from "./GetStarted/GetStarted";


const Home = () => {

    return(
        <>
            <Intro />
       
            <Brands />
       
            <Products />
       
            <Services />
       
            <Delivery />
       
            <Individuals />
        
            <Choose />
        
            <GetStarted />
       </>
    );
};

export default Home;