import { Button } from "../components/Button"

import { api } from "../services/api"

import { AxiosError } from "axios"

import { Input } from "../components/Input"
import { useState, useEffect } from "react"
import { CATEGORIES } from "../utils/categories"
import searchSvg from "../assets/search.svg"
import { Pagination } from "../components/Pagination"
import { CashLoopItens, CashLoopItemProps } from "../components/CashLoopItem"
import { formatCurrency } from "../utils/formatCurrency"



const PER_PAGE = 5

export function DashBoard() {
    const [name, setName] = useState("")
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [refunds, setRefunds] = useState<CashLoopItemProps[]>([])



    async function fetchRefunds() {

        try {
            const response = await api.get<CashloopPaginationAPIResponse>(
                `/cashloop?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`
            )
           setRefunds(
            response.data.refunds.map((refund) => ({
                id: refund.id,
                name: refund.user.name,
                description: refund.name,
                amount: formatCurrency(refund.amount),
                categoryImg: CATEGORIES[refund.category].icon,
                
            }))
            
        )
        
        setTotalPages(response.data.pagination.totalPages)
        } catch (error) {
        console.log(error)
        
        if( error instanceof AxiosError) {
            return alert(error.response?.data.message)
        }

        alert("Erro ao buscar reembolsos")
        

        }
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        fetchRefunds()
    }

    function handlePagenation(action: "next" | "previous") {
        setPage((prevPage) => {
            if (action === "next" && prevPage < totalPages) {
                return prevPage + 1
            }

            if (action === "previous" && prevPage > 1) {
                return prevPage - 1
        }
        return prevPage
    })
}

useEffect(() => {
    fetchRefunds()
},[])
    return (
    <div className="bg-red-200 rounded-xl p-10 md:min-w-[768px]">
        <h1 className=" text-gray-200 font-bold text-xl flex-1">Solicitações</h1>

        <form 
        onSubmit={onSubmit}
        className=" flex  flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-300 md:flex-row gap-3 mt-6">
            <Input placeholder="Pesquisar pelo nome"  onChange={(e)=> setName(e.target.value)} />

            <Button type="submit" variant="icon" >
                <img src={searchSvg} alt="icone de pesquisar" className="w-5" />
            </Button>
          
        </form>

        <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">

            {refunds.map((item) => (
                <CashLoopItens  key={item.id} data={item} href={`/cashLoop/${item.id}` } />
                    
                ))}

        </div>

        <Pagination
        current={page}
        total={totalPages} 
        onNext={() => handlePagenation("next")} 
        onPrevious={()=> handlePagenation("previous")} 
        
        />
    </div>
    )
}