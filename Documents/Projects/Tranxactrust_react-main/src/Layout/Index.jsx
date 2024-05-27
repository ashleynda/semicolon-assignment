import Footer from "../Components/Footer/Footer";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";



const Layout = () => {
    return (
        <>
        <NavigationBar />
        <Outlet />
        <Footer />
        
        </>
    );
};

export default Layout;