import React, { useState } from 'react';
import { GrHomeRounded } from "react-icons/gr";
import { RiSettingsLine, RiWallet3Line } from "react-icons/ri";
import { MdLogout, MdOutlineStoreMallDirectory } from "react-icons/md";
import { ImHistory } from "react-icons/im";
import { BsPeople } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { display } from '../Dashboard/DashBoard';

export function MobileSideNav() {
    const [selectedDashboard, setSelectedDashboard] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const showDashboard = (id, name) => {
        setSelectedDashboard(id);
        display(name);
        setIsOpen(false); // Close the menu after selection
    };

    const getDashboardClasses = (dashboardId, additionalClasses = '') => {
        return `flex gap-3 justify-start items-center w-full cursor-pointer 
        ${selectedDashboard === dashboardId ? "bg-blue-50 border-r-4 border-blue-500" : ""} ${additionalClasses}`;
    };

    const getComponentClasses = (dashboardId) => {
        return `font-'lato' ${selectedDashboard === dashboardId ? "text-black" : 'text-gray-500'}`;
    };

    return (
        <div className='relative'>
            {/* Hamburger Button */}
            <button
                className='md:hidden p-2 focus:outline-none'
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>

            {/* Side Navigation */}
            <div className={`md:flex flex-col justify-stretch items-start gap-[25px] ml-[57px] w-full transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static absolute bg-white z-10`}>
                <div id='dashboard-assets' className={getDashboardClasses("dashboard-assets")} onClick={() => showDashboard("dashboard-assets", "assets")}>
                    <GrHomeRounded className={getComponentClasses("dashboard-assets")} />
                    <p className={getComponentClasses("dashboard-assets")}>Dashboard</p>
                </div>
                <div id='dashboard-balance' className={getDashboardClasses('dashboard-balance')} onClick={() => showDashboard("dashboard-balance", 'balance')}>
                    <RiWallet3Line className={getComponentClasses("dashboard-balance")} />
                    <p className={getComponentClasses("dashboard-balance")}>Balance</p>
                </div>
                <div id='dashboard-store' className={getDashboardClasses("dashboard-store")} onClick={() => showDashboard("dashboard-store", 'store')}>
                    <MdOutlineStoreMallDirectory className={getComponentClasses("dashboard-store")} />
                    <p className={getComponentClasses("dashboard-store")}>Store</p>
                </div>
                <div id='dashboard-history' className={getDashboardClasses("dashboard-history")} onClick={() => showDashboard("dashboard-history", 'history')}>
                    <ImHistory className={getComponentClasses("dashboard-history")} />
                    <p className={getComponentClasses("dashboard-history")}>History</p>
                </div>
                <div id='dashboard-notifications' className={getDashboardClasses("dashboard-notifications")} onClick={() => showDashboard("dashboard-noti", 'notifications')}>
                    <IoIosNotificationsOutline className={getComponentClasses("dashboard-notifications")} />
                    <p className={getComponentClasses("dashboard-notifications")}>Notifications</p>
                </div>
                <div id='dashboard-settings' className={getDashboardClasses("dashboard-settings")} onClick={() => showDashboard("dashboard-settings", "settings")}>
                    <RiSettingsLine className={getComponentClasses("dashboard-settings")} />
                    <p className={getComponentClasses("dashboard-settings")}>Settings</p>
                </div>
                <div id='dashboard-support' className={getDashboardClasses("dashboard-support")} onClick={() => showDashboard("dashboard-support", "support")}>
                    <BsPeople className={getComponentClasses("dashboard-support")} />
                    <p className={getComponentClasses("dashboard-support")}>Support</p>
                </div>
                <div id='logout' className={getDashboardClasses("logout")} onClick={() => showDashboard("logout", "logout")}>
                    <MdLogout className={getComponentClasses("logout")} />
                    <p className={getComponentClasses("logout")}>Logout</p>
                </div>
            </div>
        </div>
    );
}
