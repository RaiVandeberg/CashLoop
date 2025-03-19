import { useState } from "react"

import { Input } from "../components/Input"

import { Button } from "../components/Button"

export function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log({email, password})

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
        legend="Senha" 
        type="password"   
        placeholder="Digite sua senha" 
        min={6}
        onChange={e => setPassword(e.target.value)}
        />

        <Button type="submit" isLoading={isLoading}>Entrar</Button>

        <a href="/signup">Criar Conta</a>

    </form>
}