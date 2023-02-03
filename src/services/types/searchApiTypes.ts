import {IBook} from "../../types/bookTypes"

interface ISearchBooksApiResponse {
	total: string
	page: string
	books: IBook[]
}

interface ISearchBooksQueryParamsApi {
	value: string
	page?: string
}

export type {
	ISearchBooksApiResponse,
	ISearchBooksQueryParamsApi,
}