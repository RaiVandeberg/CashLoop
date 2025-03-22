import { Routes, Route } from "react-router";

import { DashBoard } from "../pages/DashBoard";

import { AppLayout } from "../components/AppLayout";

import { NotFound } from "../pages/NotFound";

import { CashLoop } from "../pages/CashLoop";

export function ManagerRoutes(){
    return (
    <Routes>
        <Route path="/" element={<AppLayout />} >
            <Route path="/" element={<DashBoard />} />
            <Route path="/cashLoop/:id" element={<CashLoop />} />
        </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>)
}