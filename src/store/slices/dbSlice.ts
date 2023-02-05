import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import createToken from "../../helpers/createToken"

import {IDbNewUser, IDbSliceInitialState, IEditPasswordPayload} from "./types/dbSliceTypes"

const initialState: IDbSliceInitialState = {
	users: [],
}

const dbSlice = createSlice({
	name: 'db',
	initialState,
	reducers: {
		addUser: (state: IDbSliceInitialState, action: PayloadAction<IDbNewUser>) => {
			const id = createToken()

			state.users = [
				...state.users,
				{id, ...action.payload}
			]
		},
		editPassword: (state: IDbSliceInitialState, action: PayloadAction<IEditPasswordPayload>) => {
			state.users = state.users.map((user) =>
				user.id === action.payload.id
					? {...user, password: action.payload.password}
					: user
			)
		},
	},
})

export default dbSlice.reducer
export const {addUser, editPassword} = dbSlice.actions