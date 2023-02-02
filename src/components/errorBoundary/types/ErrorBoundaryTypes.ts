import {ReactNode} from "react"

interface Props {
	children?: ReactNode
}

interface State {
	hasError: boolean
}

export type {
	State,
	Props,
}