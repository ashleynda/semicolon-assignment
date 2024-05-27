import { Wallets } from "../../Components/Wallets/Wallets";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Payment } from "../../Components/Payment/Payment";


export function Balance(){

  return (
    <div className='w-full'>
      <div className='flex justify-items-start'>
        <p className='flex text-gray-400 text-sm not-italic font-normal p-12 items-center '>Balance <RiArrowRightSLine /> Home</p>
      </div>

      <div className='flex justify-between items-center flex-row right-12 '>
        <h2 className='text-gray-800 text-3xl font-bold leading-10'>Balance</h2>
        <p className='flex text-blue-800 text-base font-bold leading-6 items-center '>More Assets <IoIosArrowRoundForward/></p>
      </div>
      <div className='mt-12'>
        <Wallets />
      </div>

      <div className='mt-5'>
        <Payment/>
      </div>

    </div>
  )
}