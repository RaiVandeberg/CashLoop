export type CashLoopItemProps = {
    id: string
    name: string
    description: string
    amount: string
    categoryImg: string
}

type Props = React.ComponentProps<"a">  & {
    data: CashLoopItemProps
}

export function CashLoopItens({data,...rest}: Props){
    return  <a className="flex items-center gap-3 hover:bg-amber-50/10 cursor-pointer rounded-md p-2"
     {...rest }> 
    
    <img src={data.categoryImg} alt="Icone de categoria"
    className="w-8 h-8" />

    <div className="flex flex-col flex-1">
        <strong className=" text-sm text-gray-200 font-bold">{data.name}</strong>
        <span className=" text-xs text-gray-200"> {data.description} </span>
    </div>

    <span className="text-sm text-gray-200 font-semibold">
        <small className="font-normal text-gray-100">R$</small>
        {data.amount}
    </span>
    </a>
    
}