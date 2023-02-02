import {combineReducers, configureStore} from "@reduxjs/toolkit"

import searchReducer from "./slices/searchSlice"
import searchApi from "../services/searchApi"

const rootReducer = combineReducers({
	searchReducer,
	[searchApi.reducerPath]: searchApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchApi.middleware)
})

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>

export type {
	AppDispatch,
	RootState,
}