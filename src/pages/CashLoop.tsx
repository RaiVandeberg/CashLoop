import { CATEGORIES } from "../utils/categories"    
import { Input } from "../components/Input"
import { Select } from "../components/Select"

export function CashLoop() {
    console.log(CATEGORIES)
    return <form className="bg-red-100 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]">
        <header>
            <h1 className="text-xl font-bold text-gray-200">
                Solicitação de Reembolso
            </h1>
            <p className="text-sm text-gray-100 mt-2 mb-4">Dados da despesa para solicitar o Reembolso</p>
        </header>

        <Input required legend="Nome do solicitação" />
        <Select required legend="Categoria de despesa" />

    </form>
}