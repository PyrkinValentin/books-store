import {Dispatch, SetStateAction} from "react"
import {IDbUser} from "../../../../../store/slices/types/dbSliceTypes"

type TypingEmailProps = {
	onChangeUser: Dispatch<SetStateAction<IDbUser>>
}

export type {
	TypingEmailProps,
}