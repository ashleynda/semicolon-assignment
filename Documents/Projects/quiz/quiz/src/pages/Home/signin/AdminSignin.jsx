import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminSignin = () => {
    const navigate = useNavigate();
    const [adminSignin, setAdminSignin] = useState('');

    const adminLogin = () => {
        navigate('/adminDashboard')
    }

    const inputStyle = () => {
        return 'rounded-xl border-2 solid border-black w-80 h-10 placeholder-black'
      }

    const [userData, setUserData] = useState({
        email: '',
        adminNo: '',
        password: ''
    })

    const {email, adminNo, password} = userData;
    const submitAdmin = async(event) => {
        event.preventDefault();
        console.log('User Data',userData);

        const signinAdminRequest = {
            email: email,
            adminNo: adminNo,
            password: password,
        }

        await fetch('http://localhost:8080/Quiz/loginAdmin', {
            method: 'POST',
            body: JSON.stringify(signinAdminRequest),
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            const {
                id,
                message
            } = data

            if (message.includes('Successful')) {
                console.log('Signin Successful');
                localStorage.setItem('quizID', id);
                navigate('/AdninDashboard');
                return;                
            }

            setAdminSignin(message);
        })
        .catch((error) => console.error('Error:', error));
    };

  return (
    <div className='px-40 py-40 '>
        <div className='flex flex-col justify-center items-center gap-10' >
        <h1 className='text-5xl font-semibold text-blue-600'>Log in</h1>
        <h3 id='signin-response'>{adminLogin}</h3>
        <form onSubmit={adminSignin}>
            <div className='flex flex-col justify-center items-center gap-8 '>
            <input type='email' placeholder='Enter Email' className={inputStyle()}/>
            <input type='text' placeholder='Enter Admin no' className={inputStyle()}/>
            <input type="password" placeholder='Enter Password' className={inputStyle()} />
            </div>
            <div className='flex justify-center items-center mt-16'>
            <button className='flex justify-center items-center text-2xl bg-blue-600 text-white rounded-lg h-10 w-40' type='submit'>Log in</button>
            
            </div>
        </form>
        </div>      
    </div>
  )
}

export default AdminSignin
