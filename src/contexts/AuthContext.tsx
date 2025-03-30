import { useState, useEffect } from "react";
import { createContext } from "react";

type AuthContex = {
    isLoading: boolean
    session: null | UserAPIResponse
    save: (data: UserAPIResponse) => void
}

const LOCAL_STORAGE_KEY = "@cashloop"

export const AuthContext = createContext({ } as AuthContex )

export function AuthProvider({children}: { children: React.ReactNode}) {
    const [session, setSession] = useState<null | UserAPIResponse>(null)
    const [isLoading, setIsLoading] = useState(true)

    function save(data: UserAPIResponse) {
        localStorage.setItem(` ${LOCAL_STORAGE_KEY}:user`, JSON.stringify(data.user))
        localStorage.setItem(` ${LOCAL_STORAGE_KEY}:token`, data.token)

        setSession(data)
    }

    function loadUser(){
        const user = localStorage.getItem(` ${LOCAL_STORAGE_KEY}:user`)
        const token = localStorage.getItem(` ${LOCAL_STORAGE_KEY}:token`)

        if(user && token) {
            setSession({user: JSON.parse(user), token})
        }

        setIsLoading(false)
    }

    useEffect(() => {
        loadUser()
    }, [])


    return (
        <AuthContext.Provider value={{ session, save, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}