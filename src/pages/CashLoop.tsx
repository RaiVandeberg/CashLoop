import { useState } from "react"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"    
import { Input } from "../components/Input"
import { Select } from "../components/Select"
import { Upload } from "../components/Upload"
import { Button } from "../components/Button"

export function CashLoop() {

    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState("")
    const [filename, setFilename] = useState<File | null>(null)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log("Enviado")
    }
    
    return <form onSubmit={onSubmit} className="bg-red-100 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]">
        <header>
            <h1 className="text-xl font-bold text-gray-200">
                Solicitação de Reembolso
            </h1>
            <p className="text-sm text-gray-100 mt-2 mb-4">Dados da despesa para solicitar o Reembolso</p>
        </header>

        <Input required legend="Nome da solicitação" value={name} onChange={(e) => setName(e.target.value)}/>
        <div className="flex gap-4">
            <Select required legend="Categoria da despesa" value={category} onChange={(e) => setCategory(e.target.value)} >
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
        onChange={(e) => setAmount(e.target.value)}/>
        </div>

        <Upload filename={filename && filename.name} 
        
        onChange={(e) => e.target.files && setFilename(e.target.files[0])}
        />

        <Button type="submit" isLoading={isLoading}>
            Enviar </Button>

    </form>
}