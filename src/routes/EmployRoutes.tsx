import { Route, Routes } from "react-router";
import { CashLoop } from "../pages/CashLoop";
import { AppLayout } from "../components/AppLayout";
import { NotFound } from "../pages/NotFound";

export function EmployRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />} >
                <Route path="/" element={<CashLoop />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}