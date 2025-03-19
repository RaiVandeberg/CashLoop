export function NotFound() {
    return <div className="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center text-red-200 font-extrabold text-9xl ">
        <h1 className="text-10xl font-extrabold mb-10">404</h1>
        <h2 className="text-7xl mb-15 font-extrabold">Página não encontrada🥲</h2>

        <a href="/" className=" text-2xl text-black hover:text-red-300 transition ease-linear">Voltar para o inicio</a>
    </div>
}