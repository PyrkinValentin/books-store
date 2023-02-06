import {KeyboardEvent} from "react"

type InputProps = {
	value: string
	type?: string
	name?: string
	placeholder?: string
	autoCorrect?: string
	label?: string
	onChange: (value: string) => void
	onKeyDown?: (e: KeyboardEvent) => void
	readOnly?: boolean
}

export type {
	InputProps,
}