import { useState } from "react"

import { Input } from "../components/Input"

import { Button } from "../components/Button"

export function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log({name, email, password, passwordConfirm})

    }

    return <form onSubmit={onSubmit}
        className="w-full flex flex-col gap-4">
        <Input required 
        legend="E-mail" 
        type="email"   
        placeholder="seu@gmail.com" 
        onChange={e => setEmail(e.target.value)}
        />

<Input required 
        legend="nome"   
        placeholder="Seu nome"
        onChange={e => setName(e.target.value)} 
        
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

        <a href="/" className="text-sm font-semibold text-gray-200 mt-5 mb-2 text-center hover:text-red-300 transition ease-linear col-start-1">Já tenho uma conta</a>


    </form>
}