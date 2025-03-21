import { Routes, Route } from "react-router";

import { DashBoard } from "../pages/DashBoard";

import { AppLayout } from "../components/AppLayout";

import { NotFound } from "../pages/NotFound";

export function ManagerRoutes(){
    return (<Routes>
        <Route path="/" element={<AppLayout />} >
            <Route index element={<DashBoard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>)
}