type Props = React.ComponentProps<"input"> & {
    legend?: string;
}

export function Input({legend, type= "text", ...rest}: Props) {
    return (
        <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-gray-300" >
            { legend && <legend className="uppercase text-1xl mb-2 text-inherit ">{legend}</legend>}

            <input type={type} className="w-full h-12 rounded-lg border-gray-200 px-4 text-sm text-gray-400 bg-amber-50 outline-none focus: border-3 focus:border-gray-300 "{...rest} />
        </fieldset>
    )
}