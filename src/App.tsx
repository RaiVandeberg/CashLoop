import { AuthProvider } from './contexts/AuthContext';

import { Routes } from './routes';


export function App(){
  console.log(localStorage.getItem("name"))
  return(
     <AuthProvider>
         <Routes />
      </AuthProvider>

  )

}