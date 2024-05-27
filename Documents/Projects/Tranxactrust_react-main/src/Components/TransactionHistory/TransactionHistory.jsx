import Ellipse2 from '../../assets/Ellipse2.png'
import Ellipse1 from '../../assets/Ellipse1.png'

export function TransactionHistory(){

  return(
    <div>
      <div className="flex bg-blue-50 h-96 px-5 rounded-lg w-full">
        <div className='flex absolute w-[55.75rem] justify-end'>
          <img src={Ellipse2}  alt="" />
        </div>

        <div className='flex bg-blue-50 rounded-lg pt-64 '>
            <img src={Ellipse1} className='flex -ml-5 mt-2 absolute' alt='' />
        </div>
        <table className="flex mt-7">
          
          <thead className='flex px-4 md:flex flex-col gap-8 items-start px-6'>
            <tr className='text-gray-500 text-xs font-bold leading-5'>Transactions</tr>
            <tr className='text-gray-500 text-xs font-medium leading-5'>Sold bags to Irene</tr>
            <tr className='text-gray-500 text-xs font-medium leading-5'>Payment received from Irene</tr>
            <tr className='text-gray-500 text-xs font-medium leading-5'>Sold clothes to Irene</tr>
            <tr className='text-gray-500 text-xs font-medium leading-5'>Sold shoes to Irene</tr>
            <tr className='text-gray-500 text-xs font-medium leading-5'>Sold bags to Irene</tr>
          </thead> 

          
          <div className="flex md:flex justify-between gap-[80px] ml-[150px]">
          <tbody className='flex flex-col gap-8 items-center'>
          <tr className='text-gray-500 text-xs font-bold leading-5 '>Amount</tr>
          <tr className='text-gray-600 font-xs font-bold leading-5'>$50</tr>
          <tr className='text-gray-600 font-xs font-bold leading-5'>$520</tr>
          <tr className='text-gray-600 font-xs font-bold leading-5'>$150</tr>
          <tr className='text-gray-600 font-xs font-bold leading-5'>$20</tr>
          <tr className='text-gray-600 font-xs font-bold leading-5'>$15</tr>
          </tbody>


          <tbody className='hidden md:flex  flex-col gap-7 items-center'>
            <tr className='text-gray-500 text-xs font-bold leading-5'>Fee</tr>
            <tr className='text-gray-400 font-xs font-normal'>-$3</tr>
            <tr className='text-gray-400 font-xs font-normal'>-$3</tr>
            <tr className='text-gray-400 font-xs font-normal'>-$3</tr>
            <tr className='text-gray-400 font-xs font-normal'>-$3</tr>
            <tr className='text-gray-400 font-xs font-normal'>-$3</tr>
          </tbody>

          <tbody className='hidden md:flex flex-col gap-8 items-center'>
            <tr className='text-gray-500 text-xs font-bold leading-5'>Status</tr>
            <tr className='text-yellow-600 font-xs font-medium leading-5'>Pending</tr>
            <tr className='text-yellow-600 font-xs font-medium leading-5'>Pending</tr>
            <tr className='text-yellow-600 font-xs font-medium leading-5'>Pending</tr>
            <tr className='text-yellow-600 font-xs font-medium leading-5'>Pending</tr>
            <tr className='text-yellow-600 font-xs font-medium leading-5'>Pending</tr>
          </tbody>

          <tbody className='flex mr-[10px] md:flex flex-col gap-8 items-center'>
            <tr className='text-gray-500 text-xs font-medium leading-5'>Date</tr>
            <tr className='text-gray-400 font-xs font-medium leading-5'>Feb 21,2021</tr>
            <tr className='text-gray-400 font-xs font-medium leading-5'>Feb 21,2021</tr>
            <tr className='text-gray-400 font-xs font-medium leading-5'>Feb 21,2021</tr>
            <tr className='text-gray-400 font-xs font-medium leading-5'>Feb 21,2021</tr>
            <tr className='text-gray-400 font-xs font-medium leading-5'>Feb 21,2021</tr>
          </tbody>
          </div>

       

          
        </table>
      </div>
    </div>

  )
}
    {/* // <div> */}
      {/* <div className="bg-blue-50 h-96 w-full rounded-lg p-5">
        <table>
          
          <thead className='flex justify-between gap-44'>
           <tr className='text-gray-500 text-xs font-bold leading-5'>Transactions</tr>
           <tr className='text-gray-500 text-xs font-bold leading-5 '>Amount</tr>
           <tr className='text-gray-500 text-xs font-bold leading-5'>Fee</tr>
           <tr className='text-gray-500 text-xs font-bold leading-5'>Status</tr>
           <tr className='text-gray-500 text-xs font-medium leading-5'>Date</tr>
          </thead> 

          
          <div className="flex flex-col gap-8 mt-5">
          <tbody className='flex justify-between '>
            <tr className='text-gray-500 text-xs font-medium leading-5'>Sold bags to Irene</tr>
            <tr className='text-gray-600 font-xs font-bold leading-5'>$50</tr>
            <tr className='text-gray-400 font-xs font-normal'>-$3</tr>
            <tr className='text-yellow-600 font-xs font-medium leading-5'>Pending</tr>
            <tr className='text-gray-400 font-xs font-medium leading-5'>Feb 21,2021</tr>
          </tbody>

          <tbody className='flex justify-between'>
            <tr className='text-gray-500 text-xs font-medium leading-5'>Payment received from Irene</tr>
            <tr className='text-gray-600 font-xs font-bold leading-5'>$520</tr>
            <tr className='text-gray-400 font-xs font-normal'>-$3</tr>
            <tr className='text-yellow-600 font-xs font-medium leading-5'>Pending</tr>
            <tr className='text-gray-400 font-xs font-medium leading-5'>Feb 21,2021</tr>
          </tbody>

          <tbody className='flex justify-between'>
            <tr className='text-gray-500 text-xs font-medium leading-5'>Sold clothes to Irene</tr>
            <tr className='text-gray-600 font-xs font-bold leading-5'>$150</tr>
            <tr className='text-gray-400 font-xs font-normal'>-$3</tr>
            <tr className='text-yellow-600 font-xs font-medium leading-5'>Pending</tr>
            <tr className='text-gray-400 font-xs font-medium leading-5'>Feb 21,2021</tr>
          </tbody>

          <tbody className='flex justify-between'>
            <tr className='text-gray-500 text-xs font-medium leading-5'>Sold shoes to Irene</tr>
            <tr className='text-gray-600 font-xs font-bold leading-5'>$20</tr>
            <tr className='text-gray-400 font-xs font-normal'>-$3</tr>
            <tr className='text-yellow-600 font-xs font-medium leading-5'>Pending</tr>
            <tr className='text-gray-400 font-xs font-medium leading-5'>Feb 21,2021</tr>
          </tbody>

          <tbody className='flex justify-between'>
            <tr className='text-gray-500 text-xs font-medium leading-5'>Sold bags to Irene</tr>
            <tr className='text-gray-600 font-xs font-bold leading-5'>$15</tr>
            <tr className='text-gray-400 font-xs font-normal'>-$3</tr>
            <tr className='text-yellow-600 font-xs font-medium leading-5'>Pending</tr>
            <tr className='text-gray-400 font-xs font-medium leading-5'>Feb 21,2021</tr>
          </tbody>
          </div>

          
        </table>
      </div>

    </div> */}
  {/* )

} */}