type CashloopAPIResponse = {
    id: string
    userId: string
    name: string
    category: CategoriesAPIEnum
    amount: number
    filename: string
    user: {
        name: string
    }
}

type CashloopPaginationAPIResponse = {
    refunds: CashloopAPIResponse[],
    pagination: {
        page: number
        perPage: number
        totalRecords: number
        totalPages: number
    }
}