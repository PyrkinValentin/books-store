import {ReactNode} from "react"

type ButtonProps = {
	children: ReactNode
	color?: string
}

interface IColorButtonItems {
	[p: string]: string
}

export type {
	ButtonProps,
	IColorButtonItems,
}