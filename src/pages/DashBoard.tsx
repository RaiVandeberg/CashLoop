import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useState } from "react"
import { CATEGORIES } from "../utils/categories"
import searchSvg from "../assets/search.svg"
import { CashLoopItens } from "../components/CashLoopItem"

const REFUND_EXAMPLE = {
    id: "123",
    username: "Raí",
    category: "Transporte",
    value: "34.40",
    categoryImg: CATEGORIES["transport"].icon

}

export function DashBoard() {
    const [name, setName] = useState("")

    function fetchRefunds(e: React.FormEvent) {
        e.preventDefault()
        console.log(name)

    }
    return (
    <div className="bg-red-200 rounded-xl p-10 md:min-w-[768px]">
        <h1 className=" text-gray-200 font-bold text-xl flex-1">Solicitações</h1>

        <form 
        onSubmit={fetchRefunds}
        className=" flex  flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-300 md:flex-row gap-3 mt-6">
            <Input placeholder="Pesquisar pelo nome"  onChange={(e)=> setName(e.target.value)} />

            <Button type="submit" variant="icon" >
                <img src={searchSvg} alt="icone de pesquisar" className="w-5" />
            </Button>
          
        </form>

        <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
            <CashLoopItens data={REFUND_EXAMPLE} />
            <CashLoopItens data={REFUND_EXAMPLE} />
            <CashLoopItens data={REFUND_EXAMPLE} />
            <CashLoopItens data={REFUND_EXAMPLE} />
            <CashLoopItens data={REFUND_EXAMPLE} />
            <CashLoopItens data={REFUND_EXAMPLE} />
            <CashLoopItens data={REFUND_EXAMPLE} />
        </div>
    </div>
    )
}