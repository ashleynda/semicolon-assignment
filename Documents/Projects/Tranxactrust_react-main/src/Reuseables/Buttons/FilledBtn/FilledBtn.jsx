import React from "react";
import { Link } from "react-router-dom";
import style from './FilledBtn.module.css';

const FilledBtn = ({ style, btn }) => {
    return (
        <div>

            <Link to={'/signup'} >
                <button className="my-2 rounded-lg bg-[#0887ef] font-bold 3xl px-4 py-2 text-white hover:bg:blue-700
                focus:outline-none focus:ring focus:ring-blue-400 active:bg-blue-800">{btn}</button>
            </Link>

        </div>
    );
};

export default FilledBtn;