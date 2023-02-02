import {ReactNode} from "react"

type ButtonProps = {
	children: ReactNode
	color?: string
	className?: string
}

interface IColorButtonItems {
	[p: string]: string
}

export type {
	ButtonProps,
	IColorButtonItems,
}