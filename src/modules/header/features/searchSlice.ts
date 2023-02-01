import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface ISearchSliceInitialState {
	input: string
}

const initialState: ISearchSliceInitialState = {
	input: '',
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setInput: (state: ISearchSliceInitialState, action: PayloadAction<string>) => {
			state.input = action.payload
		}
	},
})

export default searchSlice.reducer
export const {setInput} = searchSlice.actions