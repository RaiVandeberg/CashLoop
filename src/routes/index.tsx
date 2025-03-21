import { BrowserRouter } from "react-router";   

import { AuthRoutes } from "./AuthRoutes";

import { ManagerRoutes } from "./ManagerRoutes"

import { EmployRoutes } from "./EmployRoutes";

export function Routes() {
    return (
        <BrowserRouter>
            <ManagerRoutes />
        </BrowserRouter>
    )
}