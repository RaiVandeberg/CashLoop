import { Route, Routes } from "react-router";
import { CashLoop } from "../pages/CashLoop";

import { NotFound } from "../pages/NotFound";
import { Confirme } from "../pages/Confirme";

import { AppLayout } from "../components/AppLayout";

export function EmployRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />} >
                <Route path="/" element={<CashLoop />} />
                <Route path="/confirm" element={<Confirme />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}