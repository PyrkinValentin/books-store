import {ReactNode} from "react"

type IconProps = {
	name: string
	width?: number
	height?: number
}

interface ICollectionIcons {
	[key: string]: ReactNode
}

export type {
	IconProps,
	ICollectionIcons,
}