import React from "react"
import { FaPlus } from "react-icons/fa6";



export function Payment(){
    return (
        <div className="flex flex-col gap-2 item-start w-[100%]">

            <div className="flex gap-6 items-center justify-between">

                <div className="flex gap-10 items-center">
                    <p className="text-gray-900 text-xl font-bold leading-10">Payment & Card</p>
                </div>

                <button className='flex gap-3 items-center px-4 py-2 text-blue-500 bg-blue-200 font-medium rounded-[5px]'>
                  <FaPlus className="w-[30px] h-[30px] bg-blue-100 p-1 border-1 border-blue-600"/> 
                  <p>Add account</p>
                </button>
            </div>

            <div>
                
            </div>
            
        </div>


    )
}