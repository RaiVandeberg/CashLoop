import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"    
import { Input } from "../components/Input"
import fileSvg from "../assets/file.svg"
import { Select } from "../components/Select"
import { Upload } from "../components/Upload"
import { Button } from "../components/Button"

export function CashLoop() {

    const [name, setName] = useState("teste")
    const [amount, setAmount] = useState("1234")
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState("transport")
    const [filename, setFilename] = useState<File | null>(null)

    const navigate = useNavigate()
    const params = useParams<{id: string}>()
    

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        if(params.id){
            return navigate(-1)
        }
        navigate("/confirm", {state: { fromSubmit: true }})
    }
    
    return <form onSubmit={onSubmit} className="bg-red-100 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]">
        <header>
            <h1 className="text-xl font-bold text-gray-200">
                Solicitação de Reembolso
            </h1>
            <p className="text-sm text-gray-100 mt-2 mb-4">Dados da despesa para solicitar o Reembolso</p>
        </header>

        <Input required legend="Nome da solicitação" value={name} onChange={(e) => setName(e.target.value)} disabled={!!params.id}/>
        <div className="flex gap-4">
            <Select required legend="Categoria da despesa" value={category} onChange={(e) => setCategory(e.target.value)} disabled={!!params.id} >
            {
                CATEGORIES_KEYS.map((category) => (
                    <option key={category} value={category}>
                        {CATEGORIES[category].name}
                    </option>
                ))}
        </Select>

        <Input required 
        legend="Valor" 
        type="number"  
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}
        disabled={!!params.id}
        />
        </div>

        {
            params.id ? (<a  className="text-sm font-bold text-gray-200 flex justify-center items-center gap-2 my-6 hover:opacity-70" href="" target="_blank"> 
            <img src={fileSvg} alt="Icone de arquivo" />
            Abrir comprovante
            </a>
        ) : (
                <Upload filename={filename && filename.name} 
        
        onChange={(e) => e.target.files && setFilename(e.target.files[0])}
        disabled={!!params.id}/>
            )}

        

        <Button type="submit" isLoading={isLoading}>
            {params.id ? "Voltar" : "Enviar"} 
        </Button>

    </form>
}