import {IUser} from "../../../types/userTypes"

interface IDbUser extends IUser {
	id: string
	password: string
}

interface IDbNewUser extends IUser {
	password: string
}

interface IDbSliceInitialState {
	users: IDbUser[]
}

interface IEditPasswordPayload {
	id: string
	password: string
}

export type {
	IDbUser,
	IDbNewUser,
	IDbSliceInitialState,
	IEditPasswordPayload,
}