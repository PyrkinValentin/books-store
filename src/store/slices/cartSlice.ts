import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IBookCart, ICartSliceInitialState} from "./types/cartSliceTypes"

const initialState: ICartSliceInitialState = {
	cart: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart: (state: ICartSliceInitialState, action: PayloadAction<IBookCart>) => {
			state.cart = [...state.cart, action.payload]
		},
		increaseCountCart: (state: ICartSliceInitialState, action: PayloadAction<string>) => {
			state.cart = state.cart.map(
				(book) => book.isbn13 === action.payload
					? ({...book, count: book.count < 10 ? book.count + 1 : 10})
					: book
			)
		},
		decreaseCountCart: (state: ICartSliceInitialState, action: PayloadAction<string>) => {
			state.cart = state.cart.map(
				(book) => book.isbn13 === action.payload
					? ({...book, count: book.count > 1 ? book.count - 1 : 1})
					: book
			)
		},
		removeCart: (state: ICartSliceInitialState, action: PayloadAction<string | undefined>) => {
			state.cart = action.payload
				? state.cart.filter((book) => book.isbn13 !== action.payload)
				: []
		},
	}
})

export default cartSlice.reducer
export const {setCart, increaseCountCart, decreaseCountCart, removeCart} = cartSlice.actions