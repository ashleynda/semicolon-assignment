import Layout from "../components/layouts/Layout";
import Home from "../pages/Home";
import AdminSignin from "../pages/Home/signin/AdminSignin";
import Signin from "../pages/Home/signin/Signin";
import AdminSignup from "../pages/Home/signup/AdminSignup";
import Signup from "../pages/Home/signup/Signup";
import StudentSignup from "../pages/Home/signup/StudentSignup";
import Welcome from "../pages/Home/welcome/Welcome";



export const ROUTES = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "welcome/",
                element: <Welcome />,
            },
        ]
    },
    {
        path: "Signup/",
        element: <Signup />,
        children: [ 
            
        ]
    },
    {
        path: "/adminsignup",
        element: <AdminSignup />,
    },
    {
        path: "/studentsignup",
        element: <StudentSignup />,
    },
    {
        path: "Signin",
        element: <Signin />,
        children: [
            {
                path: "",
                element: "",
            },
        ]
    },
    {
        path: "/adminsignin",
        element: <AdminSignin />,
    },
    



]