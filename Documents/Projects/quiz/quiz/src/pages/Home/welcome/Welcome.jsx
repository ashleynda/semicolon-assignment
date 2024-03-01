import React from 'react'
import { Filled } from '../../../components/buttons/Filled'
import { Ghost } from '../../../components/buttons/Ghost'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate("/signin")
    }

    const handleSignup = () => {
        navigate("/signup")
    }
  return (
    <div>
        <div className='flex justify-between px-36 py-10'>
            <div>
                <h1 className='text-3xl'>Quiz</h1>
            </div>
            <div className='flex gap-4'>
                <Ghost text="Login" color="blue" fontSize={16} width={80} height={20}
                    border="none" background={"none"} lineHeight={2.5} onClick={handleLogin}
                />
                <Filled text="Signup" color="white" backgroundColor="blue" borderRadius={12}
                    border="none" width={100} height={40} fontSize={16} gap={8} onClick={handleSignup}/>
            </div>
        </div>
      
    </div>
  )
}

export default Welcome
