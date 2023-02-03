import {FC} from "react"
import icons from "./constants/icons"
import {IconProps} from "./types/IconTypes"

const Icon: FC<IconProps> = ({name, width = 24, height = 24, strokeWidth = 1, className}) => {
	return (
		<svg
			xmlns={'http://www.w3.org/2000/svg'}
			viewBox={'0 0 24 24'}
			width={width}
			height={height}
			stroke={'currentColor'}
			strokeWidth={strokeWidth}
			aria-label={name}
			fill={'none'}
			strokeLinecap={'round'}
			strokeLinejoin={'round'}
			className={className}
		>
			{icons[name]}
		</svg>
	)
}

export default Icon