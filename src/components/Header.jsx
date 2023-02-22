import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
export default function Header() {
    const location = useLocation();
    function pathMathRoute(route) {
        if (route === location.pathname) {
            return true
        }
    }
    const navigate = useNavigate();

    return (
        <div className='bg-white border-b-2 shadow-sm sticky top-0 z-50'>
            <header className="flex px-3 py-3 justify-between items-center mx-auto max-w-6xl">
                <div>
                    <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
                        alt="logo" className='h-6 cursor-pointer'
                        onClick={() => navigate("/")} />
                </div>
                <div>
                    <ul className='flex space-x-10'>
                        <li className={`cursor-pointer font-semibold ${pathMathRoute("/") && "text-black border-b-4 border-b-red-500"}`} onClick={() => navigate("/")}>Home</li>
                        <li className={`cursor-pointer font-semibold ${pathMathRoute("/offers") && "text-black border-b-4 border-b-red-500"}`} onClick={() => navigate("/offers")}>Offers</li>
                        <li className={`cursor-pointer font-semibold ${pathMathRoute("/sign-in") && "text-black border-b-4 border-b-red-500"}`} onClick={() => navigate("/sign-in")}>Sign In</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
