import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"    
import { z, ZodError } from "zod"
import { api } from "../services/api"   
import { AxiosError } from "axios"
import { Input } from "../components/Input"
import fileSvg from "../assets/file.svg"
import { Select } from "../components/Select"
import { Upload } from "../components/Upload"
import { Button } from "../components/Button"

const cashloopSchema = z.object({
    name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    category: z.string().min(1, { message: "Selecione uma categoria" }),
    amount: z.coerce.number({ message: "Valor deve ser um número" }).positive({ message: "Valor deve ser maior que 0" }),
})

export function CashLoop() {

    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [category, setCategory] = useState("")
    const [filename, setFilename] = useState<File | null>(null)

    const navigate = useNavigate()
    const params = useParams<{id: string}>()
    

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        

        if(params.id){
            return navigate(-1)
        }

        try {
            setIsLoading(true)
            if(!filename){
                return alert("Selecione um arquivo")
            }

            const fileUploadForm = new FormData()
            fileUploadForm.append("file", filename)

            const response = await api.post("/uploads", fileUploadForm)
            const data = cashloopSchema.parse({
                name,
                category,
                amount: amount.replace(",", "."),
            })

            await api.post("/cashloop", {...data, 
                filename: response.data.filename,
            })
           
          navigate("/confirm", {state: { fromSubmit: true }})
        } catch (error) {
            console.log(error)

            if(error instanceof ZodError){
                return alert(error.issues[0].message)
            }
            if(error instanceof AxiosError){
                console.log(error.response?.data.message)
                return alert(error.response?.data.message)
            }
            alert("Erro ao enviar o formulário")
        } finally{
            setIsLoading(false)
        }
        
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