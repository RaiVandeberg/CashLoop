import { useActionState } from "react"

import { Input } from "../components/Input"

import { Button } from "../components/Button"

export function SignIn() {
    const [ state, formAction, isLoading ] = useActionState(signIn, {email: "", password:""})

   
    
    async function signIn(prevState: any, formData: FormData) {
       const email = formData.get("email")
         const password = formData.get("password")
        
         return { email, password }
        
       
        

    }

    return <form action={formAction}
        className="w-full flex flex-col gap-4">
        <Input required 
        name="email"
        legend="E-mail" 
        type="email"   
        placeholder="seu@gmail.com" 
        defaultValue={String(state?.email)}
       
        
        />

        <Input required 
        name="password"
        legend="Senha" 
        type="password"   
        placeholder="Digite sua senha" 
        min={6}
        defaultValue={String(state?.password)}
        
       
        />

        <Button type="submit" isLoading={isLoading}>Entrar</Button>

        <a href="/signup" className="text-sm font-semibold text-gray-200 mt-5 mb-2 text-center hover:text-red-300 transition ease-linear">Criar Conta</a>

    </form>
}