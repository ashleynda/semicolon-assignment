import React from "react"
import download from '../../assets/download.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";



export function Activity(){
    return (
        <div className="flex flex-col gap-2 item-start w-[100%]">

            <div className="flex gap-6 items-center justify-between">

                <div className="flex gap-10 items-center">
                    <p className="text-gray-900 text-3xl font-bold leading-10 ">Activity</p>
                    <img src={download} className="border to-black" alt=""/>
                </div>

                <div className='flex justify-between items-center flex-row right-12 '>
                    <p className='flex text-blue-800 text-base font-bold leading-6 items-center '>More Activity <IoIosArrowRoundForward/></p>
                </div>
            </div>

            <div>
                <TransactionHistory/>
            </div>
            
        </div>


    )
}