import Home from "../pages/Home/Index";
import Layout from "../Layout/Index";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Trustmonie from "../Products/Trustmonie";
import About from "../pages/AboutUs/AboutUs";
import Investrust from "../Products/Investrust";
import { DashBoard } from "../pages/Dashboard/DashBoard";
import { Store } from "../pages/Store/Store";
import Shop from "../Products/Shop";
import GhostBtn from "../Reuseables/Buttons/GhostBtn/GhostBtn";
import Personal from "../pages/Signup/Personal/Personal";
import Business from "../pages/Signup/Business/Business";
import Logistics from "../pages/Signup/Logistics/Logistics";
import Developer from "../pages/Signup/Developer/Developer";

export const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },

            {
                path: "/about",
                element: <About />,
            },

            {
                path: '/trustmonie',
                element: <Trustmonie />
            },

            {
                path: "/investrust",
                element: <Investrust />
                // <a href="#intro" />,
            },

            {
                path: "/shop",
                element: <Shop />,
            },

            // {
            //     path: '/signup',
            //     element: <Signup />
            // },

        ]

    },

    {
        path: '/login',
        element: <Login />,
    },

    {
        path: '/signup',
        element: <Signup />
    },

    {
        path: '/signup/personal',
        element: <Personal />
    },

    {
        path: '/signup/business',
        element: <Business />
    },

    {
        path: '/signup/logistics',
        element: <Logistics />
    },

    {
        path: '/signup/developer',
        element: <Developer />
    },


    {
        path: "/dashboard",
        element: <DashBoard />
    },
]