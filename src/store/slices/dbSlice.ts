import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import createToken from "../../helpers/createToken"

import {IDbSliceInitialState, IDbUser, INewUser} from "./types/dbSliceTypes"

const initialState: IDbSliceInitialState = {
	users: [],
}

const dbSlice = createSlice({
	name: 'db',
	initialState,
	reducers: {
		addUser: (state: IDbSliceInitialState, action: PayloadAction<INewUser>) => {
			state.users = [
				...state.users,
				{id: createToken(), ...action.payload}
			]
		},
		editUser: (state: IDbSliceInitialState, action: PayloadAction<IDbUser>) => {
			state.users = state.users.map((user) =>
				user.id === action.payload.id
					? action.payload
					: user
			)
		},
	},
})

export default dbSlice.reducer
export const {addUser, editUser} = dbSlice.actions