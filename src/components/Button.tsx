type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean;
}

export function Button({ children, isLoading, type="button", ...rest }: Props) {
    return <button type={type} disabled={isLoading} className=" flex items-center justify-center bg-red-300 rounded-lg text-white cursor-pointer mt-5 hover:bg-red-500 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed h-12 font-bold text-xl" {...rest}>
        {children}
        </button>
}