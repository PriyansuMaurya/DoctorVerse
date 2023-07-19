import React, { lazy } from "react"

const Home=lazy(()=>import("./pages/Home"))
const AboutUs=lazy(()=>import("./pages/AboutUs"))
const Contact=lazy(()=>import("./pages/Contact"))
const Login=lazy(()=>import("./pages/Login/Login"))

export const routes = [

{
        path:"/",
        element:Home
},
{
        path:"/contact",
        element:Contact
},
{
        path:"/about",
        element:AboutUs
},
{
        path:"/login",
        element:Login
}
];