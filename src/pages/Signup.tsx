import { useState } from "react"

import { z, ZodError } from "zod"

import { Input } from "../components/Input"

import { Button } from "../components/Button"

const signSchema = z.object({
    name: z.string().trim().min(1, {message: "Nome é obrigatório"}),
    email: z.string().email({message: "Email inválido"}),
    password: z.string().min(6, {message: "Senha deve ter no mínimo 6 caracteres"}),
    passwordConfirm: z.string({message: "Confirmação de senha é obrigatória"}),
}).refine((date) => date.password === date.passwordConfirm, {
    message: "Senhas não conferem",
    path: ["passwordConfirm"]
})

export function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            setIsLoading(true)
            const data = signSchema.parse({name, email, password, passwordConfirm})
        } catch (error) {
            if(error instanceof ZodError) {
               return alert(error.errors[0].message)
            }

            alert("não foi possível realizar o cadastro")
        } finally{
            setIsLoading(false)
        }
    }

    return <form onSubmit={onSubmit}
        className="w-full flex flex-col gap-4">


        

<Input required 
        legend="nome"   
        placeholder="Seu nome"
        onChange={e => setName(e.target.value)} 
        
        />

<Input required 
        legend="E-mail" 
        type="email"   
        placeholder="seu@gmail.com" 
        onChange={e => setEmail(e.target.value)}
        />

        <Input required 
        legend="Senha" 
        type="password"   
        placeholder="Digite sua senha" 
        min={6}
        onChange={e => setPassword(e.target.value)}
        />

<Input required 
        legend="Confirme sua senha" 
        type="password"   
        placeholder="Confirme sua senha" 
        min={6}
        onChange={e => setPasswordConfirm(e.target.value)}

        />

        <Button type="submit" isLoading={isLoading}>Cadastrar</Button>

        <a href="/" className="text-sm font-semibold text-gray-200 mt-2 mb-2 text-center hover:text-red-300 transition ease-linear col-start-1">Já tenho uma conta</a>


    </form>
}