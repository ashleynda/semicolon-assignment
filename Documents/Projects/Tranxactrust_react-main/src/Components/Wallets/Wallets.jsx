import React from 'react'
import Chart from '../../assets/Chart.png'
import Chartone from '../../assets/Chartone.png'
import Plus from '../../assets/Plus.png'
import { IoIosArrowRoundForward } from 'react-icons/io'


export function Wallets(){
    return (
        <div className='flex flex-col gap-6 overflow-x-auto items-start justify-start'>
            <div className='flex items-center gap-48'>
                <p className='flex text-gray-600 text-lg font-bold items-start w-[120px]' style={{ transition: 'transform 0.3s ease' }}>Total Wallet</p>
                <p className='flex text-gray-600 text-lg font-bold leading-7 items-start'>Ethereum</p>
            </div>
            
            <div className='flex items-start justify-start gap-6'>
            
                <div className='flex flex-col gap-4 bg-gradient-to-r from-indigo-200 to-blue-500 rounded-xl h-40 w-72 ' style={{ transition: 'transform 0.3s ease' }}>
                    <div className='flex gap-12'>
                        <div className='flex flex-col items-start p-4 h-24'>
                            <p className='text-white'>₦</p>
                            <p className='text-white text-4xl font-medium pb-4'>1,820</p>
                        </div>
                        <img src={Chart} className='flex w-24 h-16 mt-8' alt=''/>
                    </div>

                    <div className='flex gap-12 px-4'>
                    
                        <div>
                            <p className='text-blue-800 text-sm'>Profit</p>
                            <p className='text-green-600 font-medium leading-5 tracking-wider'>+2.87%</p>
                        </div>                 
                        <div>
                            <p className='text-blue-800 text-sm'>Loss</p>
                            <p className='text-red-500 font-medium leading-5 tracking-wider'>-0.17</p>
                        </div>
                        <div>
                            <p className='text-blue-800 text-sm'>Neutral</p>
                            <p className='text-gray-50 font-medium leading-5'>0.00%</p>

                        </div>                                    
                    </div>
                </div>

                {/* <div> */}
                    <div className='flex flex-col gap-4 bg-indigo-100 rounded-xl h-40 w-72'>
                        <div className='flex gap-12'>
                            <div className='flex flex-col items-start p-4 h-24'>
                                <p className='text-white'>₦</p>
                                <p className='text-blue-700 text-4xl font-medium pb-4'>1,100</p>
                            </div>
                            <img src={Chartone} className='flex w-24 h-16 mt-8 ' alt=''/>
                        </div>
                        <div className='flex gap-12 px-4'>
                            <div>
                                <p className='text-blue-800 text-sm'>Profit</p>
                                <p className='text-green-600 font-medium leading-5 tracking-wider'>+2.87%</p>
                            </div>                 
                            <div>
                                <p className='text-blue-800 text-sm'>Loss</p>
                                <p className='text-red-500 font-medium leading-5 tracking-wider'>-0.17</p>
                            </div>
                            <div>
                                <p className='text-blue-800 text-sm'>Neutral</p>
                                <p className='text-gray-50 font-medium leading-5'>0.00%</p>

                            </div>                                     
                        </div>
                    </div>
                {/* </div> */}

                {/* <div className=''> */}
                    <div className='bg-indigo-100 rounded-xl h-40 w-72 flex flex-col p-8'>
                        <div className='flex flex-col justify-start items-center gap-3'>
                            <img src={Plus} className='' alt=''/>

                            <div className='flex flex-col align-text-center gap-2'>
                                <p className='text-blue-300 text-base font-bold leading-6 text-center'>Convert</p>
                                <p className='text-blue-300 text-base font-xs leading-5 text-center'>Cash - ETH</p>  
                            </div>
                                                
                        </div>
                    </div>
                {/* </div> */}
            </div>
          

        </div>
    )
}
