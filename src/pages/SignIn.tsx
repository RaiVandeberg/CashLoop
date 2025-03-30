import { useActionState } from "react"
import { z, ZodError } from "zod"
import { api } from "../services/api"
import { AxiosError } from "axios"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

const signInScheme = z.object({
    email: z
    .string()
    .email( {message: "E-mail inválido"}),
    password: z
    .string()
    .trim()
    .min(6, {message: "A senha deve ter pelo menos 6 caracteres"})
})

export function SignIn() {
    const [ state, formAction, isLoading ] = useActionState(signIn, null)

    async function signIn(_: any, formData: FormData) {

        try {
            const data  = signInScheme.parse({
                email: formData.get("email"),
                password: formData.get("password")
               })

               const response = await api.post("/sessions", data)
               console.log(response.data)

        } catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
               return { message: (error.issues[0].message)}
            }
            if( error instanceof AxiosError) {
                return { message: error.response?.data.message}
            }

            return { message: "Erro ao fazer login, tente novamente mais tarde"}
        }

    }

    return <form action={formAction}
        className="w-full flex flex-col gap-4">
        <Input required 
        name="email"
        legend="E-mail" 
        type="email"   
        placeholder="seu@gmail.com" 
        
        />

        <Input required 
        name="password"
        legend="Senha" 
        type="password"   
        placeholder="Digite sua senha" 
        min={6}
       
        />
        <p className=" text-sm text-gray-50 text-center my-2 font-medium">
            {state?.message}
        </p>

        <Button type="submit" isLoading={isLoading}>Entrar</Button>

        <a href="/signup" className="text-sm font-semibold text-gray-200 mt-5 mb-2 text-center hover:text-red-300 transition ease-linear">Criar Conta</a>

    </form>
}