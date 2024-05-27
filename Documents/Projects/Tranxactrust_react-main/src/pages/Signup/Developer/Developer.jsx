import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import key from "../../../images/ic_round-key.svg";
import eye from "../../../images/ph_eye.svg";
import globe from "../../../images/jam_world.svg";
import close from "../../../images/eye-close-svgrepo-com.svg"
import tranxact from "../../../images/Tranxact on.png"
import { MdOutlineMail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import Support from "../../Support/Support";
import style from "./Developer.module.css";



const Developer = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);

    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10,13}$/;
        return phoneNumberPattern.test(phoneNumber);
    }

    const navigate = useNavigate();

    const personal = () => {
        navigate('/personal');
    };

    const business = () => {
        navigate('/business');
    };

    const logistics = () => {
        navigate('/logistics');
    };

    const developer = () => {
        navigate('/developer');
    };
    const [userData, setUserData] = useState({
        phoneNumber: '',
        nationality: '',
        businessName: '',
        userName: `${'', ''}`,
        email: '',
        password: ''
    });

    const createUser = async (e) => {
        console.log("a click event happened");
        e.preventDefault();
        try {
            // const apiUrl = `${process.env.REACT_APP_TRANXACTRUST}/users`;
            // const apiUrl = `${process.env.REACT_API_TRANXACTRUST}/users`;

            const apiUrl = `http://localhost:8770/api/users`;
            const userPhoneData = {
                ...userData,
                phoneNumber: phoneNumber,
                password: password
            };
            console.log(phoneNumber);


            await fetch(apiUrl, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userPhoneData)
            })
                .then(res => res.text())
                .then(resObject => {
                    console.log(resObject);
                })

            setUserData({
                nationality: '',
                businessName: '',
                userName: `${'', '', ''}`,
                phoneNumber: '',
                email: '',
                password: ''
            });
        } catch (error) {
            console.error('Account not created:', error.message);
        }
    };

    return (
        <div>
            
            <Link to={'/'}>
                <img className={style.logo} src={tranxact} />
            </Link>
            <Link to={'/signup'} className='link text-cyan-900 font-extrabold px-96'><i className='bi bi-arrow-left text-cyan-900 font-extrabold px-76'></i>Return</Link>


            <div className={style.signupBox}>
                <div className={style.signupOption}>
                    {/* <h2 className={style.signupOption1} >Personal</h2> */}
                    <h2 className={style.signupOption2} >Business</h2>
                    <h2 className={style.signupOption3} >Logistics</h2>
                    <h2 className={style.signupOption4} >Developers</h2>
                </div>

                <div className={style.email}>
                    <div className={style.emailCon}>
                        <div className={style.globe}>
                            Country...
                            <img className={style.globeSvg} src={globe} />
                        </div>

                        <select id="dropdown" value={userData.nationality}
                            onChange={(e) => setUserData({ ...userData, nationality: e.target.value })}
                            className={style.country_drop}>
                            <option value="">Country...</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Tanzania">Tanzania</option>
                        </select>
                    </div>

                    <div className={style.emailCon} >
                        Business Name
                        <div className={style.emailCollector}>
                            <input
                                type="text"
                                className={style.nameCollector}
                                name="email"
                                placeholder="Business name"
                                required
                                value={userData.businessName}
                                onChange={(e) => setUserData({ ...userData, businessName: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className={style.emailCon} >
                        User Name
                        <div className={style.emailCollector}>
                            <input
                                type="text"
                                className={style.nameCollector}
                                name="email"
                                placeholder="username"
                                required
                                value={userData.userName}
                                onChange={(e) => setUserData({ ...userData, userName: e.target.value })}

                            />
                        </div>
                    </div>

                    {/* <div className={style.emailCon} >
                        Middle Name
                        <div className={style.emailCollector}>
                            <input 
                            type="text"  
                            className={style.nameCollector} 
                            name="email" 
                            placeholder="middle name" 
                            required 
                            value={userData.userName}
                            onChange={(e) => setUserData({ ...userData, userName: e.target.value })}

                            />
                        </div>
                    </div>

                    <div className={style.emailCon} >
                        Last Name
                        <div className={style.emailCollector}>
                            <input 
                            type="text" 
                            className={style.nameCollector} 
                            name="email" 
                            placeholder="last name" 
                            required 
                            value={userData.userName}
                            onChange={(e) => setUserData({ ...userData, userName: e.target.value })}

                            />
                        </div>
                    </div> */}


                    <div className={style.phoneBox}>
                        <label>
                            Phone Number
                            <PhoneInput
                                country={'ng'}
                                // className={style.collector}
                                name="phone"
                                placeholder="Phone number"
                                inputProps={{
                                    required: true,
                                }}
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                style={{ width: '300px', fontSize: '16px' }}
                                inputStyle={{ border: '1px solid #ccc', width: '400px', height: '50px', borderRadius: '5px' }}
                                dropdownStyle={{ border: '1px solid #ccc', borderTop: 'none', borderRadius: '0 0 5px 5px', maxHeight: '200px', overflowY: 'auto', flexDirection: 'column' }}
                            />
                        </label>
                        {!valid && <p className={style.warning}>Please enter a valid phone number.</p>}
                    </div>

                    <div className={style.emailCon} >
                        Email address
                        <div className={style.emailCollector}>
                            <MdOutlineMail className={style.emailImage} />
                            <input
                                type="text"
                                className={style.collector}
                                name="email"
                                placeholder="Email address"
                                required
                                value={userData.email}
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            />
                        </div>
                    </div>


                    <div className={style.passwordCon1}>
                        Password
                        <div className={style.passwordCon}>
                            <img className={style.keySvg} src={key} />
                            <input
                                className={style.collector}
                                type={passwordVisible ? 'text' : 'password'}
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                            <img className={style.eyeSvg}
                                src={passwordVisible ? (close) : (eye)}
                                alt="Toggle Password Visibility"
                                onClick={togglePasswordVisibility} />
                        </div>
                    </div>
                    <div className={style.question}>Already have an account?
                        <Link to={'/login'}><b>Log In </b></Link>

                    </div>
                    <Link to={'/dashboard'}>
                        <button className={style.signupBtn} onClick={createUser}>
                            Sign Up
                        </button>
                    </Link>

                    <p className={style.agreement}>By clicking the
                        “Create my account” button, you agree to Tranxactrust’s
                        <Link to={'/'} className={style.policy} > terms of acceptable use and
                            Data Processing Agreement. </Link>
                    </p>
                    <p className={style.agreement}>To learn more about how Tranxactrust collects,
                        uses and discloses your personal data, please read our
                        <Link to={'/'} className={style.policy} > Privacy Policy.</Link></p>
                </div>
            </div>
            <Support />

        </div>
    );

}

export default Developer;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { MdOutlineMail } from "react-icons/md";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import Support from "../Support/Support";
// import key from "../../images/ic_round-key.svg";
// import eye from "../../images/ph_eye.svg";
// import globe from "../../images/jam_world.svg";
// import close from "../../images/eye-close-svgrepo-com.svg";
// import tranxact from "../../images/Tranxact on.png";

// const Developer = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [valid, setValid] = useState(true);
//   const [userData, setUserData] = useState({
//     phoneNumber: "",
//     nationality: "",
//     businessName: "",
//     userName: "",
//     email: "",
//     password: "",
//   });

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handlePhoneChange = (value) => {
//     setPhoneNumber(value);
//     setValid(validatePhoneNumber(value));
//   };

//   const validatePhoneNumber = (phoneNumber) => {
//     const phoneNumberPattern = /^\d{10,13}$/;
//     return phoneNumberPattern.test(phoneNumber);
//   };

//   const createUser = async (e) => {
//     console.log("a click event happened");
//     e.preventDefault();
//     try {
//       // const apiUrl = `${process.env.REACT_APP_TRANXACTRUST}/users`;
//       const apiUrl = `${process.env.REACT_API_TRANXACTRUST}/users`;

//       // const apiUrl = `http://localhost:8770/api/users`;
//       const userPhoneData = {
//         ...userData,
//         phoneNumber: phoneNumber,
//         password: password,
//       };
//       console.log(phoneNumber);

//       await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userPhoneData),
//       })
//         .then((res) => res.text())
//         .then((resObject) => {
//           console.log(resObject);
//         });

//       setUserData({
//         nationality: "",
//         businessName: "",
//         userName: `${"", "", ""}`,
//         phoneNumber: "",
//         email: "",
//         password: "",
//       });
//     } catch (error) {
//       console.error("Account not created:", error.message);
//     }
//   };

//   return (
//     <div className="signupContainer">
//       <Link to={"/"}>
//         <img className="logo" src={tranxact} alt="Tranxact" />
//       </Link>
//       <div className="signupBox">
//         <div className="email">
//           <div className="emailCon">
//             <div className="globe">
//               Country...
//               <img className="globeSvg" src={globe} alt="Globe" />
//             </div>
//             <select
//               id="dropdown"
//               value={userData.nationality}
//               onChange={(e) =>
//                 setUserData({ ...userData, nationality: e.target.value })
//               }
//               className="country_drop"
//             >
//               <option value="">Country...</option>
//               <option value="Nigeria">Nigeria</option>
//               <option value="Kenya">Kenya</option>
//               <option value="Tanzania">Tanzania</option>
//             </select>
//           </div>
//           <div className="emailCon">
//             Business Name
//             <div className="emailCollector">
//               <input
//                 type="text"
//                 className="nameCollector"
//                 name="businessName"
//                 placeholder="Business name"
//                 required
//                 value={userData.businessName}
//                 onChange={(e) =>
//                   setUserData({ ...userData, businessName: e.target.value })
//                 }
//               />
//             </div>
//           </div>
//           <div className="emailCon">
//             User Name
//             <div className="emailCollector">
//               <input
//                 type="text"
//                 className="nameCollector"
//                 name="userName"
//                 placeholder="Username"
//                 required
//                 value={userData.userName}
//                 onChange={(e) =>
//                   setUserData({ ...userData, userName: e.target.value })
//                 }
//               />
//             </div>
//           </div>
//           <div className="phoneBox">
//             <label>
//               Phone Number
//               <PhoneInput
//                 country={"ng"}
//                 name="phone"
//                 placeholder="Phone number"
//                 inputProps={{ required: true }}
//                 value={phoneNumber}
//                 onChange={handlePhoneChange}
//                 inputStyle={{
//                   border: "1px solid #ccc",
//                   width: "100%",
//                   height: "50px",
//                   borderRadius: "5px",
//                   fontSize: "16px",
//                 }}
//                 dropdownStyle={{
//                   border: "1px solid #ccc",
//                   borderTop: "none",
//                   borderRadius: "0 0 5px 5px",
//                   maxHeight: "200px",
//                   overflowY: "auto",
//                   flexDirection: "column",
//                 }}
//               />
//             </label>
//             {!valid && <p className="warning">Please enter a valid phone number.</p>}
//           </div>
//           <div className="emailCon">
//             Email address
//             <div className="emailCollector">
//               <MdOutlineMail className="emailImage" />
//               <input
//                 type="text"
//                 className="collector"
//                 name="email"
//                 placeholder="Email address"
//                 required
//                 value={userData.email}
//                 onChange={(e) =>
//                   setUserData({ ...userData, email: e.target.value })
//                 }
//               />
//             </div>
//           </div>
//           <div className="passwordCon1">
//             Password
//             <div className="passwordCon">
//               <img className="keySvg" src={key} alt="Key" />
//               <input
//                 className="collector"
//                 type={passwordVisible ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//               />
//               <img
//                 className="eyeSvg"
//                 src={passwordVisible ? close : eye}
//                 alt="Toggle Password Visibility"
//                 onClick={togglePasswordVisibility}
//               />
//             </div>
//           </div>
//           <div className="question">
//             Already have an account? <Link to={"/login"}><b>Log In</b></Link>
//           </div>
//           <button className="signupBtn" onClick={createUser}>Sign Up</button>
//           <p className="agreement">
//             By clicking the “Create my account” button, you agree to Tranxactrust’s{" "}
//             <Link to={"/"} className="policy">terms of acceptable use and Data Processing Agreement.</Link>
//           </p>
//           <p className="agreement">
//             To learn more about how Tranxactrust collects, uses and discloses your personal data, please read our{" "}
//             <Link to={"/"} className="policy">Privacy Policy.</Link>
//           </p>
//         </div>
//       </div>
//       <Support />
//     </div>
//   );
// };

// export default Developer;

