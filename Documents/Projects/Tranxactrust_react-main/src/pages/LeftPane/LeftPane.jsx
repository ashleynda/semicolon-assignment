import logo from "../../assets/Tranxact only.png";
import profile from "../../assets/profileimage.png";
import {TbCurrencyNaira} from "react-icons/tb";
import {IoIosArrowDown} from "react-icons/io";
import {SideNav} from "../SideNav/SideNav";
import {CiSquareAlert} from "react-icons/ci";
import { MobileSideNav } from "../SideNav/MobileSideNav";


export function LeftPane(){

    return (
        <div className="flex flex-col h-fit md:h-screen gap-4 bg-fffaf8 md:py-12 md:px-8 items-center ">
            <div className="flex flex-col justify-center items-center gap-5 border-b-2 py-8 max-w-full">
                <div className='hidden md:flex gap-4 max-w-full align-middle justify-center'>
                    <img src={logo} className='max-w-[180px]' alt=""/>
                </div>

                <div className='flex rounded-2xl p-3 bg-blue-100 gap-4  w-[260px] md:w-fit items-center justify-center'>
                    <img src={profile} alt=""/>
                    <div className='flex w-fit gap-2 justify-center items-center'>
                        <div>
                            <p className=" flex text-black font-[16px] font-lato text-base leading-6 tracking-wider">Ayodele
                                Joel</p>
                            <p className='flex text-gray-500 font-lato text-xs leading-5 tracking-tight justify-center items-center font-bold'>Wallet
                                Balance:
                                <span className="flex">
                                    <TbCurrencyNaira/>
                                </span>
                                <span className="flex font-[15px]">
                                    400
                                </span>
                            </p>
                            <p className='flex text-gray-500 font-lato text-xs leading-5 tracking-tight justify-center items-center font-bold'>Escrow
                                Balance:
                                <span className="flex">
                                    <TbCurrencyNaira/>
                                </span>
                                <span className="flex font-[15px]">
                                    400
                                </span>
                            </p>
                        </div>
                        <IoIosArrowDown/>
                    </div>
                </div>
                {isMobile && (
                    <MobileSideNav />
                )}

            </div>

            <SideNav/>

            <div className="hidden md:flex justify-center items-center p-6 mt-[100px] bg-guild-bg bg-no-repeat bg-contain">
                <button className="bg-blue-200 flex justify-center items-center rounded-lg px-12 py-2 gap-1 ">
                    <CiSquareAlert/>
                    <p>Guide</p>
                </button>
            </div>

        </div>
    )
}
