interface INewUser {
	username: string
	email: string
	password: string
}

interface IDbUser extends INewUser {
	id: string
}

interface IDbSliceInitialState {
	users: IDbUser[]
}

export type {
	INewUser,
	IDbUser,
	IDbSliceInitialState,
}