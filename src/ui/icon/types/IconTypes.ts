import {ReactNode} from "react"

type IconProps = {
	name: string
	width?: number
	height?: number
	strokeWidth?: number
	className?: string
}

interface ICollectionIcons {
	[key: string]: ReactNode
}

export type {
	IconProps,
	ICollectionIcons,
}