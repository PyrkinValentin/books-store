import {IUser} from "../../types/userTypes"

interface IUseSession extends IUser {
	logout: () => void
}

export type {
	IUseSession,
}