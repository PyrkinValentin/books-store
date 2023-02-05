import {IBook} from "../../../types/bookTypes"

interface IUseFetchingShowcase {
	isSearchPage: boolean
	isFetching: boolean
	value: string
	books: IBook[]
	currentPage: number
	totalPages: number
	totalBooks: number
}

export type {
	IUseFetchingShowcase,
}