import { Navigate, useLocation } from "react-router"
import okSvg from "../assets/ok.svg"

export function Confirme() {

    const location = useLocation()

    if (!location.state?.fromSubmit) {
        return <Navigate to="/" />
    }
    return (
        <div className=" bg-red-200 lg:w-[512px] rounded-xl flex flex-col items-center p-10 gap-6 text-gray-200 ">
            <h1 className=" text-2xl font-bold text-center">Solicitação Enviada!</h1>

            <img src={okSvg} alt="confirm" className="w-28"/>

            <p className=" text-sm text-center">Agora é apenas aguardar! sua solicitação será analisada</p>

            <a href="/" className="p-3 text-center cursor-pointer w-full bg-red-300 rounded-lg font-semibold  hover:bg-red-500 transition ease-linear">Nova Solicitação</a>
        </div>
    )
}