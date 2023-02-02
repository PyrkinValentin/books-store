import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IBooksApiResponse, IBooksQueryParamsApi} from "./types/searchApiTypes"

const searchApi = createApi({
	reducerPath: 'searchApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://api.itbook.store/1.0'}),
	endpoints: (builder) => ({
		searchBooks: builder.query<IBooksApiResponse, IBooksQueryParamsApi>({
			query: (query) => `/search/${query.value}${query.page ? `/${query.page}` : ''}`
		}),
	})
})

export default searchApi
export const { useSearchBooksQuery } = searchApi