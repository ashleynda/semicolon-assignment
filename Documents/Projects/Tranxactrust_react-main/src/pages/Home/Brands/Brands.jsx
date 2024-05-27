import React from "react";
import { Link } from "react-router-dom";
import landwey from "../../../images/landwey.jpeg";
import adron from "../../../images/adron.png";
import fuse from "../../../images/fuse.jpeg";
import mist from "../../../images/mist.png";

const Brands = () => {
    return (
        <section className="container mx-auto flex flex-col items-center py-8">
            <p className="text-center text-3xl font-semibold mb-4">
                Your favourite brands trust{" "}
                <span className="text-blue-500">Tranxactrust.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <img src={landwey} alt="LandWey logo" className="h-16" />
                <img src={adron} alt="Adron logo" className="h-16" />
                <img src={fuse} alt="Fuse logo" className="h-16" />
                <img src={mist} alt="Mist logo" className="h-16" />
            </div>
        </section>
    );
};

export default Brands;

// import React from "react";
// import { Link } from "react-router-dom";
// import landwey from "../../../images/landwey.jpeg";
// import adron from "../../../images/adron.png";
// import fuse from "../../../images/fuse.jpeg";
// import mist from "../../../images/mist.png";
// import style from "./Brands.module.css";

// const Brands = () => {
//     return (
//         <section className="container mx-auto flex flex-col">
            
//             <p className={style.brandPara}>
//                 Your favourite brands trust{" "}
//                 <span className={style.brandSpan}>Tranxactrust.</span>
//             </p>
//             <div className={style.brand}>
//                 <img src={landwey} alt="LandWey logo" className={style.landwey} />
//                 <img src={adron} alt="Adron logo" className={style.adron} />
//                 <img src={fuse} alt="Fuse logo" className={style.fuse} />
//                 <img src={mist} alt="Mist logo" className={style.mist} />
//             </div>
//         </section>
//     );
// };

// export default Brands;
