import {ReactNode, MouseEvent} from "react"

type ButtonProps = {
	children: ReactNode
	color?: string
	className?: string
	disabled?: boolean
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

interface IColorButtonItems {
	[p: string]: string
}

export type {
	ButtonProps,
	IColorButtonItems,
}