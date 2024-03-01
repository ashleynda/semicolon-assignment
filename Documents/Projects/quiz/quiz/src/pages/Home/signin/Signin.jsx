import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Ghost } from '../../../components/buttons/Ghost';

const Signin = () => {
  const navigate = useNavigate();

    const handleAdminLogin = () => {
      navigate('/adminsignin')
    }

    const signin = () => {
      navigate('/dashboard')
    }

    const inputStyle = () => {
        return 'rounded-xl border-2 solid border-black w-80 h-10 placeholder-black'
      }

  return (
    <div className='px-40 py-40 '>
    <div className='flex flex-col justify-center items-center gap-10' >
      <h1 className='text-5xl font-semibold text-blue-600'>Log in</h1>
      <form onSubmit={signin}>
        <div className='flex flex-col justify-center items-center gap-8 '>
        <input type="text" placeholder='Enter First Name' className={inputStyle()} />
        <input type='text' placeholder='Enter Last Name' className={inputStyle()}/>
        <input type='email' placeholder='Enter Email' className={inputStyle()}/>
        <input type="password" placeholder='Enter Password' className={inputStyle()} />
        <input type="password" placeholder='Re-type Password' className={inputStyle()} />
        </div>
        <div className='flex justify-center items-center mt-16 gap-8'>
        <button className='flex justify-center items-center text-2xl bg-blue-600 text-white rounded-lg h-10 w-40' type='submit'>Log in</button>
        <Ghost text="Admin Signin" color="#2563eb " fontSize={16} width={100} height={20}
                border="none" background={"none"} lineHeight={2.5} fontWeight={700} onClick={handleAdminLogin}
            />
        
        </div>
      </form>
    </div>
       

  </div>
  )
}

export default Signin
