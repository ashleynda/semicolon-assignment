import React from "react";
import style from "./SignupNotification.module.css";


const Alert = () => {

    return(
        <div>
          <p className={style.alert}>Successful. Please check the email provided and verify your account.</p>
        </div>
    );
}