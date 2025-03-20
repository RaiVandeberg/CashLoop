type Props = React.ComponentProps<"select"> & {
    legend?: string;
}

export function Select({legend, children, ...rest}: Props) {
    return (
        <fieldset className="flex flex-1 max-h-20 text-gray-100 focus-within:text-gray-300" >
            { legend && <legend className="uppercase text-1xl mb-2 text-inherit ">{legend}</legend>}

            <select  className="w-full h-12 rounded-lg border-gray-200 px-4 text-sm text-gray-400 bg-amber-50 outline-none focus: border-3 focus:border-gray-300 " value=""{...rest} >



            <option value="" disabled hidden >Selecione uma opção</option>
            {children}
            </select>
        </fieldset>
    )
}