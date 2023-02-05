import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IUser} from "../../types/userTypes"

const initialState: IUser = {
	loggedIn: false,
	username: '',
	email: '',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state: IUser, action: PayloadAction<IUser>) => {
			return action.payload
		},
		logout: (state: IUser) => {
			state.email = ''
			state.loggedIn = false
			state.username = ''
		},
	},
})

export default userSlice.reducer
export const {setUser, logout} = userSlice.actions