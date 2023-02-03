import {combineReducers, configureStore} from "@reduxjs/toolkit"

import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import persistConfig from "./persist/persistConfig"
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist/es/constants"

import searchReducer from "./slices/searchSlice"
import favoritesReducer from "./slices/favoritesSlice"

import searchApi from "../services/searchApi"

const rootReducer = combineReducers({
	searchReducer,
	favoritesReducer,
	[searchApi.reducerPath]: searchApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			}
		}).concat(searchApi.middleware)
})

const persistor = persistStore(store)

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>

export {store, persistor}
export type {AppDispatch, RootState}