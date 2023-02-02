import {IBook} from "../../types/bookTypes"

interface IBooksApiResponse {
	total: string
	page: string
	books: IBook[]
}

interface IBooksQueryParamsApi {
	value: string
	page?: string
}

export type {
	IBooksApiResponse,
	IBooksQueryParamsApi,
}