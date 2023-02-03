import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ISearchSliceInitialState} from "./types/searchSliceTypes"

const initialState: ISearchSliceInitialState = {
	input: '',
	isShowResults: false,
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setInput: (state: ISearchSliceInitialState, action: PayloadAction<string>) => {
			state.input = action.payload
		},
		setShowResults: (state: ISearchSliceInitialState, action: PayloadAction<boolean>) => {
			state.isShowResults = action.payload
		}
	},
})

export default searchSlice.reducer
export const {setInput, setShowResults} = searchSlice.actions