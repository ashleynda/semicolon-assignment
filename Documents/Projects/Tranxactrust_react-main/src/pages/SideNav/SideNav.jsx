import {GrHomeRounded} from "react-icons/gr";
import {RiSettingsLine, RiWallet3Line} from "react-icons/ri";
import {MdLogout, MdOutlineStoreMallDirectory} from "react-icons/md";
import {ImHistory} from "react-icons/im";
import {BsPeople} from "react-icons/bs";
import {useState} from "react";
import {display} from '../Dashboard/DashBoard';
import { IoIosNotificationsOutline } from "react-icons/io";


export function SideNav(){
    const [selectedDashboard, setSelectedDashboard] = useState("")

    const showDashboard = (id, name) => {
        setSelectedDashboard(id)
        // dashboardRef.current.display(name)
        display(name)
    }

    const getDashboardClasses = (dashboardId, additionalClasses = '') => {
        return `flex gap-3 justify-start items-center w-full cursor-pointer 
        ${selectedDashboard === dashboardId ? "bg-blue-50 border-r-4 border-blue-500" : ""} ${additionalClasses}`;
    };

    const getComponentClasses = (dashboardId) => {
        return `font-'lato' ${selectedDashboard === dashboardId ? "text-black": 'text-gray-500'}`;
    }

    return (
        <div id='dashboard-main' className='hidden md:flex flex-col justify-stretch items-start gap-[25px] ml-[57px] w-full'>

            <div
                id='dashboard-assets'
                className={getDashboardClasses("dashboard-assets")}
                onClick={() => {showDashboard("dashboard-assets", "assets")}}>
                <GrHomeRounded className={getComponentClasses("dashboard-assets")}/>
                <p className={getComponentClasses("dashboard-assets")}>
                    Dashboard </p>
            </div>

            <div
                id='dashboard-balance'
                className={getDashboardClasses('dashboard-balance')}
                onClick={() => {showDashboard("dashboard-balance", 'balance')}}>
                <RiWallet3Line className={getComponentClasses("dashboard-balance")}/>
                <p className={getComponentClasses("dashboard-balance")}>Balance</p>
            </div>

            <div
                id='dashboard-store'
                className={getDashboardClasses("dashboard-store")}
                onClick={() => {showDashboard("dashboard-store", 'store')}}>
                <MdOutlineStoreMallDirectory className={getComponentClasses("dashboard-store")}/>
                <p className={getComponentClasses("dashboard-store")}>Store</p>
            </div>

            <div
                id='dashboard-history'
                className={getDashboardClasses("dashboard-history")}
                onClick={() => {showDashboard("dashboard-history", 'history')}}>
                <ImHistory className={getComponentClasses("dashboard-history")}/>
                <p className={getComponentClasses("dashboard-history")}>History</p>
            </div>

            <div
                id='dashboard-notifications'
                className={getDashboardClasses("dashboard-notifications")}
                onClick={() => {showDashboard("dashboard-noti", 'history')}}>
                <IoIosNotificationsOutline className={getComponentClasses("dashboard-history")}/>
                <p className={getComponentClasses("dashboard-history")}>Notifications</p>
            </div>

            <div
                id='dashboard-settings'
                className={getDashboardClasses("dashboard-settings")}
                onClick={() => {showDashboard("dashboard-settings", " ")}}>
                <RiSettingsLine className={getComponentClasses("dashboard-settings")}/>
                <p className={getComponentClasses("dashboard-settings")}>Settings</p>
            </div>

            <div
                id='dashboard-support'
                className={getDashboardClasses("dashboard-support")}
                onClick={() => {showDashboard("dashboard-support", " ")}}>
                <BsPeople className={getComponentClasses("dashboard-support")}/>
                <p className={getComponentClasses("dashboard-support")}>Support</p>
            </div>

            <div
                id='logout'
                className={getDashboardClasses("logout")}
                onClick={() => {showDashboard("logout", " ")}}>
                <MdLogout className={getComponentClasses("logout")}/>
                <p className={getComponentClasses("logout")}>Logout</p>
            </div>
        </div>
    )
}
