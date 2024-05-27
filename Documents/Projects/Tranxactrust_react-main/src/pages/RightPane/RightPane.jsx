import image from '../../assets/imageprofile.png';
import {TbCurrencyNaira} from "react-icons/tb";
import { MdOutlineAttachMoney } from "react-icons/md";
import { HiArrowsUpDown } from "react-icons/hi2";
export function RightPane(){

    return(
        <div className="hidden md:flex flex-col gap-4 py-4 px-4 w-96 ">
            <div className="flex flex-col w-full py-16 gap-4 rounded-lg">
                <p className="font-lato text-[20px] font-medium">Trader Profile</p>
                <div className="flex flex-col justify-center items-center gap-2">
                    <img src={image} className="rounded-full border-2 border-orange-500 p-1"/>
                    <p className="font-lato text-[16px] font-medium">Ayodele Joel</p>
                    <button className="text-blue-950 font-medium text-[12px] px-5 py-2 bg-blue-200 rounded-2xl">
                        Edit Profile
                    </button>
                </div>

                <div>
                    <p className="text-gray-500 text-[10px] font-lato">
                        Joined
                    </p>
                    <p className="text-[10px] font-lato">
                        June 22, 2020
                    </p>
                </div>
            </div>

            <div className="flex flex-col p-4 justify-between h-[380px]">
                <div className="flex justify-start flex-col">
                    <p className="text-black font-medium">Account</p>
                    <div>
                        <div className="flex justify-between p-2">
                            <p className="flex text-[15px] font-lato text-gray-500">Total Balance: </p>
                            <p className="flex text-[15px] font-lato items-center font-medium"><TbCurrencyNaira/>
                                <span>1320.00</span>
                            </p>
                        </div>
                        <div className="flex justify-between p-2">
                            <p className="flex text-[15px] font-lato text-gray-500">Dolar: </p>
                            <p className="flex text-[15px] font-lato items-center font-medium"><MdOutlineAttachMoney/>
                                <span>132.00</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="bg-blue-900 text-white py-3 px-16 flex items-center gap-3">
                        <HiArrowsUpDown className="text-white"/>
                        Buy Now
                    </button>
                </div>
            </div>

        </div>
    )
}