import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminSignup = () => {

    const navigate = useNavigate();
    const [adminSignup, setAdminSignup] = useState('');

    const [userData, setUserData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      retypePassword: ''
    })
    
    const {firstname, lastname, email, password, retypePassword} = userData;
    const submitAdmin = async(event) => {
      event.preventDefault();
      console.log('User Data',userData);

      const signupAdminRequest = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        retypePassword: retypePassword,
      }

      await fetch('http://localhost:8080/Quiz/registerAdmin', {
        method: 'POST',
        body: JSON.stringify(signupAdminRequest),
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then((response) => response.json())
      .then((data) => {
        const {
          id,
          username,
          message
        } = data

        if(message.includes('Successful')){
          console.log('Signup Successful');
          localStorage.setItem('quizUsername', username);
          localStorage.setItem('quizID', id);
          navigate('/dashboard');
          return;
        }

        setAdminSignup(message);
      })
      .catch((error) => console.error('Error:', error));
};
    const admin = () => {
      navigate('/dashboard')
    }
    
  
    const inputStyle = () => {
      return 'rounded-xl border-2 solid border-black w-80 h-10 placeholder-black'
    }

  return (
    <div className='px-20 py-20 '>
      <div className='flex flex-col justify-center items-center gap-10' >
        <h1 className='text-5xl font-semibold text-blue-600'>Sign up As Admin</h1>
        <h3 id='signup-response'>{adminSignup}</h3>
        
        <form onSubmit={admin}>
          <div className='flex flex-col justify-center items-center gap-8 '>
          <input type="text" placeholder='Enter First Name' className={inputStyle()} value={userData.firstname} onChange={(e) => setUserData({...userData, firstname: e.target.value})} />
          <input type='text' placeholder='Enter Last Name' className={inputStyle()} value={userData.lastname} onChange={(e) => setUserData({...userData, lastname: e.target.value})}/>
          <input type='email' placeholder='Enter Email' className={inputStyle()} value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})}/>
          <input type="password" placeholder='Enter Password' className={inputStyle()} value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value})} />
          <input type="password" placeholder='Re-type Password' className={inputStyle()} value={userData.retypePassword} onChange={(e) => setUserData({...userData, retypePassword: e.target.value})}/>
          </div>
          <div className='flex justify-center items-center mt-16'>
          <button className='flex justify-center items-center text-2xl bg-blue-600 text-white rounded-lg h-10 w-40' type='submit' onClick={submitAdmin}>Sign up</button>
          </div>
        </form>
      </div>
         

    </div>
  )
}

export default AdminSignup
