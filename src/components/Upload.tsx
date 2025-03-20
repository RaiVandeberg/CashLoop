import uploadSvg from "../assets/upload.svg"

type Props = React.ComponentPropsWithoutRef<"input"> & {
    filename?: string | null
}

export function Upload({ filename = null, ...rest }: Props) {
    return (
        <div>
            <legend className="uppercase text-xs text-gray-200 mb-2">
                Comprovante
            </legend>

            <div className="w-full h-12 flex items-center rounded-lg border border-gray-200 text-sm text-gray-300 outline-none bg-amber-50 mb-">
                <input type="file" id="upload" className="hidden" {...rest} />

                <span className="text-xs text-gray-400 flex-1 pl-4">
                    {filename ?? "Selecione o arquivo"}
                </span>

                <label htmlFor="upload" className="flex h-12 px-2 items-center bg-red-200 rounded-lg disabled:opacity-50
                cursor-pointer hover:bg-red-300">
                    <img src={uploadSvg} alt="Icone de Upload" />
                </label>
            </div>
        </div>
    )
}