import { Route, Routes } from "react-router";
import { CashLoop } from "../pages/CashLoop";

import { NotFound } from "../pages/NotFound";

export function EmployRoutes() {
    return (
        <Routes>
            <Route path="/" element={<CashLoop />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}