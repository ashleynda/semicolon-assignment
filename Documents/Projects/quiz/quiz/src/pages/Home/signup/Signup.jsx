import React from 'react'
import { Form, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const handleStudentSignup = () => {
    navigate('/studentsignup')
  }

  const handleAdminSignup = () => {
    navigate('/adminsignup')
  }

  const choiceStyle = () => {
    return ' items-center bg-blue-600 text-white'
  }

  const inputStyle = () => {
    return 'rounded-xl border-2 solid border-black w-80 h-10 placeholder-black'
  }
   
    
  return (
    <div className='px-20 py-20 '>
      <div className='flex flex-col justify-center items-center gap-10' >
        <h1 className='text-5xl font-semibold text-blue-600'>Sign up</h1>
        <div className='flex flex-row justify-center gap-12 w-52 h-14'>
            <button className={choiceStyle()} onClick={handleAdminSignup}>As an Admin</button>
            <button className={choiceStyle()} onClick={handleStudentSignup}>As a Student</button>
        </div>
        <form>
          <div className='flex flex-col justify-center items-center gap-8 '>
          <input type="text" placeholder='Enter First Name' className={inputStyle()} />
          <input type='text' placeholder='Enter Last Name' className={inputStyle()}/>
          <input type='email' placeholder='Enter Email' className={inputStyle()}/>
          <input type="password" placeholder='Enter Password' className={inputStyle()} />
          <input type="password" placeholder='Re-type Password' className={inputStyle()} />
          </div>
          <div className='flex justify-center items-center mt-16'>
          <button className='flex justify-center items-center text-2xl bg-blue-600 text-white rounded-lg h-10 w-40'>Sign up</button>
          </div>
        </form>
      </div>
         

    </div>
  )
}

export default Signup
