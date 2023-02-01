import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IBookApiResponse {
	title: string
	image: string
	isbn13: string
}

interface IBooksApiResponse {
	total: string
	page: string
	books: IBookApiResponse[]
}

const searchApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://api.itbook.store/1.0'}),
	endpoints: (builder) => ({
		searchBooks: builder.query<IBooksApiResponse, string>({
			query: (query) => `/search/${query}`
		}),
	})
})

export default searchApi
export const { useSearchBooksQuery } = searchApi