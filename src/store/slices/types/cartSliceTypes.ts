import {IBookCart} from "../../../types/bookTypes"

interface ICartSliceInitialState {
	cart: IBookCart[]
}

export type {
	IBookCart,
	ICartSliceInitialState,
}