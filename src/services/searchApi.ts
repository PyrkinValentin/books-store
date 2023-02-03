import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {ISearchBooksApiResponse, ISearchBooksQueryParamsApi} from "./types/searchApiTypes"
import {IBookDetails} from "../types/bookTypes"

const searchApi = createApi({
	reducerPath: 'searchApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://api.itbook.store/1.0'}),
	endpoints: (builder) => ({
		searchBooks: builder.query<ISearchBooksApiResponse, ISearchBooksQueryParamsApi>({
			query: (query) => `/search/${query.value}${query.page ? `/${query.page}` : ''}`
		}),
		getBook: builder.query<IBookDetails, string | undefined>({
			query: (id) => `/books/${id}`
		}),
	})
})

export default searchApi
export const { useSearchBooksQuery, useGetBookQuery } = searchApi