import { useState } from "react";
import { createContext } from "react";

type AuthContex = {
    session: null | UserAPIResponse
    save: (data: UserAPIResponse) => void
}

export const AuthContext = createContext({ } as AuthContex )

export function AuthProvider({children}: { children: React.ReactNode}) {
    const [session, setSession] = useState<null | UserAPIResponse>(null)

    function save(data: UserAPIResponse) {
        setSession(data)
    }


    return (
        <AuthContext.Provider value={{ session, save}}>
            {children}
        </AuthContext.Provider>
    )
}