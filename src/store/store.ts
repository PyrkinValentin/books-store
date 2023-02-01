import {combineReducers, configureStore} from "@reduxjs/toolkit"

import searchReducer from "../modules/header/features/searchSlice"
import searchApi from "../modules/header/services/searchApi"

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