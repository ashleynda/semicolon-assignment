import React from 'react'

const Choice = () => {

    const choiceStyle = () => {
        return 'flex flex-row justify-center items-center bg-blue-600 text-white'
    }
  return (
    <div>
        <div>
            <button className={choiceStyle()}>As an Admin</button>
            <button className={choiceStyle()}>As a Student</button>
        </div>
      
    </div>
  )
}

export default Choice
