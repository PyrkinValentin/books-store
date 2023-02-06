import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IUser} from "../../types/userTypes"

const initialState: IUser = {
	id: '',
	username: '',
	email: '',
	loggedIn: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state: IUser, action: PayloadAction<IUser>) => {
			return {
				...state,
				...action.payload
			}
		},
		logout: (state: IUser) => {
			state.id = ''
			state.username = ''
			state.email = ''
			state.loggedIn = false
		},
	},
})

export default userSlice.reducer
export const {setUser, logout} = userSlice.actions