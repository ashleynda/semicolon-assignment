import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa";
import { IoImagesOutline } from "react-icons/io5";
const image1 = require("../../assets/Rectangle 39.png");
const image2 = require("../../assets/Rectangle 40.png");
const image3 = require("../../assets/Rectangle 41.png");
const image4 = require("../../assets/Rectangle 42.png");
const show1 = require("../../assets/Rectangle 44.png");
const show2 = require("../../assets/Rectangle 45.png");
const show3 = require("../../assets/Rectangle 43.png");
const show4 = require("../../assets/Rectangle 44 (1).png");
const show5 = require("../../assets/Rectangle 47.png");
const show6 = require("../../assets/Rectangle 45 (1).png");


export function Store(){
    return (
        <div className="flex flex-col w-full py-5 px-8">

            <div className="flex items-start py-8 text-gray-500">
                <h1 className="flex items-center">Store <FaAngleRight/> Home</h1>
            </div>

            <div className="flex justify-between">
                <h1 className="font-medium font-'lato' text-[37px] leading-6 tracking-wider ">Store</h1>
                <div className="flex items-center text-[16px] text-blue-700 font-bold leading-6 tracking-wider">
                    <p>Post Images</p>
                    <HiOutlineArrowSmallRight className="text-xl w-16"/>
                </div>
            </div>

            <div>
                <div className="flex justify-start p-4">
                    <p className="m-2 text-gray-500 ">images</p>
                </div>
                <div className="flex ">
                    <img className="w-206 h-144 flex-shrink-0" src={image1} alt="store product"/>
                    <img className="w-206 h-144 flex-shrink-0" src={image2} alt="store product"/>
                    <img className="w-206 h-144 flex-shrink-0" src={image3} alt="store product"/>
                    <div className="flex gap-6 items-center">
                        <img className="w-206 h-144 flex-shrink-0" src={image4} alt="store product"/>

                        <div className="flex flex-col ">
                            <IoImagesOutline className="text-[45px] h-[45px] flex text-gray-500"/>
                            <p className="text-[16px] text-gray-500 w-10">View Images</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col mt-16 mb-10">
                    <div className="flex justify-start">
                        <p className="text-[25px] font-medium ">Images</p>
                    </div>

                    <div className="grid grid-cols-3 gap-y-5 gap-x-16 w-fit">

                        <div className="flex flex-col w-[269px] h-[220px] flex-shrink-0">
                            <img className="w-full -z-5 -mb-10" src={show1} alt="store product"/>
                            <div className="flex justify-between z-5 px-8 font-'roboto' ">
                                <p className="font-bold text-gray-50 text-[18px]">Official 101</p>
                                <p className="flex items-center text-green-500 font-roboto font-bold text-[18px]">
                                    <TbCurrencyNaira/>40,000</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-[269px] h-[220px] flex-shrink-0">
                            <img className="w-full -z-5 -mb-10" src={show2} alt="store product"/>
                            <div className="flex justify-between z-5 px-8 font-'roboto' ">
                                <p className="font-bold text-gray-50 text-[18px]">Sneaker 404</p>
                                <p className="flex items-center text-green-500 font-roboto font-bold text-[18px]">
                                    <TbCurrencyNaira/>350,000</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-[269px] h-[220px] flex-shrink-0">
                            <img className="w-full -z-5 -mb-10" src={show3} alt="store product"/>
                            <div className="flex justify-between z-5 px-8 font-'roboto' ">
                                <p className="font-bold text-gray-50 text-[18px]">Slick</p>
                                <p className="flex items-center text-green-500 font-roboto font-bold text-[18px]">
                                    <TbCurrencyNaira/>80,000</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-[269px] h-[220px] flex-shrink-0">
                            <img className="w-full -z-5 -mb-10" src={show5} alt="store product"/>
                            <div className="flex justify-between z-5 px-8 font-'roboto' ">
                                <p className="font-bold text-gray-50 text-[18px]">Brown & Glue</p>
                                <p className="flex items-center text-green-500 font-roboto font-bold text-[18px]">
                                    <TbCurrencyNaira/>20,000</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-[269px] h-[220px] flex-shrink-0">
                            <img className="w-full -z-5 -mb-10" src={show4} alt="store product"/>
                            <div className="flex justify-between z-5 px-8 font-'roboto' ">
                                <p className="font-bold text-gray-50 text-[18px]">Inspace</p>
                                <p className="flex items-center text-green-500 font-roboto font-bold text-[18px]">
                                    <TbCurrencyNaira/>140,000</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-[269px] h-[220px] flex-shrink-0">
                            <img className="w-full -z-5 -mb-10" src={show6} alt="store product"/>
                            <div className="flex justify-between z-5 px-8 font-'roboto' ">
                                <p className="font-bold text-gray-50 text-[18px]">Heels</p>
                                <p className="flex items-center text-green-500 font-roboto font-bold text-[18px]">
                                    <TbCurrencyNaira/>90,000</p>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </div>
    )
}
