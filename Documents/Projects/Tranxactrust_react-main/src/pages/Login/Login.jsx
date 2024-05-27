// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MdOutlineMail } from "react-icons/md";
// import Support from "../Support/Support";
// import tranxact from "../../images/Tranxact on.png";
// import key from "../../images/ic_round-key.svg";
// import eye from "../../images/ph_eye.svg";
// import close from "../../images/eye-close-svgrepo-com.svg";
// import style from "./Login.module.css";

// const Login = () => {
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const [selectedOption, setSelectedOption] = useState('');

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     const handleSelectChange = (event) => {
//         setSelectedOption(event.target.value);
//     };

//     const dropCountries = () => {
//         const drop = document.getElementById("dropdown");
//         drop.click();
//         drop.style.display = "flex";
//     };

//     const handleLogin = () => {
//         // Handle login logic
//         navigate('/'); // Navigate to dashboard page after login
//     };

//     return (
//         <div>
//             <div className={style.loginBox}>
//                 <Link to={'/'}>
//                     <img className={style.logo} src={tranxact} alt="Tranxact" />
//                 </Link>
//                 <div className={style.email}>
//                     <div className={style.emailCon}>
//                         Email address
//                         <div className={style.emailCollector}>
//                             <MdOutlineMail className={style.emailImage} />
//                             <input
//                                 type="text"
//                                 id="email1"
//                                 className={style.collector}
//                                 name="email"
//                                 placeholder="Email address"
//                                 required
//                             />
//                         </div>
//                         <div className={style.passwordCon1}>
//                             Password
//                             <div className={style.passwordCon}>
//                                 <img className={style.keySvg} src={key} alt="Key" />
//                                 <input
//                                     className={style.collector}
//                                     type={passwordVisible ? 'text' : 'password'}
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     placeholder="Password"
//                                 />
//                                 <img
//                                     className={style.eyeSvg}
//                                     src={passwordVisible ? close : eye}
//                                     alt="Toggle Password Visibility"
//                                     onClick={togglePasswordVisibility}
//                                 />
//                             </div>
//                         </div>
//                         <button className={style.loginBtn} onClick={handleLogin}><h2>Log In</h2></button>
//                         <div className={style.question}>
//                             New to Tranxactrust? <Link to={'/signup'}><b>Sign Up</b></Link>
//                         </div>
//                         <Link to={'/'} className={style.update}>Forgot your password?</Link>
//                     </div>
//                 </div>
//             </div>
//             <Support />
//         </div>
//     );
// };

// export default Login;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import Support from "../Support/Support";
import tranxact from "../../images/Tranxact on.png";
import key from "../../images/ic_round-key.svg";
import eye from "../../images/ph_eye.svg";
import close from "../../images/eye-close-svgrepo-com.svg";
import style from "./Login.module.css";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async () => {
        console.log("A login click happened")
        try {
            const response = await fetch('https://your-backend-api.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Successful login
                const data = await response.json();
                // Save authentication token to local storage or session storage
                localStorage.setItem('authToken', data.token);
                // Redirect to dashboard or home page
                navigate('/home');
            } else {
                // Failed login
                // Handle error
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div>
            <div className={style.loginBox}>
                <Link to={'/'}>
                    <img className={style.logo} src={tranxact} alt="Tranxact" />
                </Link>
                <div className={style.email}>
                    <div className={style.emailCon}>
                        Email address
                        <div className={style.emailCollector}>
                            <MdOutlineMail className={style.emailImage} />
                            <input
                                type="text"
                                className={style.collector}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                required
                            />
                        </div>
                        <div className={style.passwordCon1}>
                            Password
                            <div className={style.passwordCon}>
                                <img className={style.keySvg} src={key} alt="Key" />
                                <input
                                    className={style.collector}
                                    type={passwordVisible ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                                />
                                <img
                                    className={style.eyeSvg}
                                    src={passwordVisible ? close : eye}
                                    alt="Toggle Password Visibility"
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                        </div>
                        <button className={style.loginBtn} onClick={handleLogin}><h2>Log In</h2></button>
                        <div className={style.question}>
                            New to Tranxactrust? <Link to={'/signup'}><b>Sign Up</b></Link>
                        </div>
                        <Link to={'/'} className={style.update}>Forgot your password?</Link>
                    </div>
                </div>
            </div>
            <Support />
        </div>
    );
};

export default Login;
