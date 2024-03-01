import React from 'react'
import { useNavigate } from 'react-router-dom'

const StudentSignup = () => {
    
    const navigate = useNavigate();  
    
    const studentSignup = () => {
      navigate('/dashboard')
    }
  
    const inputStyle = () => {
      return 'rounded-xl border-2 solid border-black w-80 h-10 placeholder-black'
    }

  return (
    <div className='px-20 py-20 '>
        <div className='flex flex-col justify-center items-center gap-10' >
        <h1 className='text-5xl font-semibold text-blue-600'>Sign up As Student</h1>
       
      <form onSubmit={studentSignup}>
        <div className='flex flex-col justify-center items-center gap-8 '>
        <input type="text" placeholder='Enter First Name' className={inputStyle()} />
        <input type='text' placeholder='Enter Last Name' className={inputStyle()}/>
        <input type='email' placeholder='Enter Email' className={inputStyle()}/>
        <input type="password" placeholder='Enter Password' className={inputStyle()} />
        <input type="password" placeholder='Re-type Password' className={inputStyle()} />
        </div>
        <div className='flex justify-center items-center mt-16'>
        <button className='flex justify-center items-center text-2xl bg-blue-600 text-white rounded-lg h-10 w-40' type='submit'>Sign up</button>
        </div>
      </form>
    </div>
       

  </div>
  )
}

export default StudentSignup
