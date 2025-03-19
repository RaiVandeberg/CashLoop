import { Outlet } from "react-router";

import logoSvg from "../assets/logo.svg"

export function AuthLayout() {
    return (
        <div className="w-screen h-screen bg-gray-100 flex flex-col justify-center items-center text-gray-500">
            <main className="bg-red-100 px-10 py-8 rounded-md flex items-center flex-col w-full max-w-[462px]">
                <img src={logoSvg} alt="logo" className="my-8"/>

                <Outlet />
            </main>

            
        </div>
    )
}