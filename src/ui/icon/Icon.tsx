import {IconProps} from "./types/IconTypes"
import icons from "./constants/icons"

const Icon = ({name, width = 24, height = 24}: IconProps) => {
	return (
		<svg
			xmlns={'http://www.w3.org/2000/svg'}
			viewBox={'0 0 24 24'}
			width={width}
			height={height}
			stroke={'currentColor'}
			aria-label={name}
			fill={'none'}
			strokeLinecap={'round'}
			strokeLinejoin={'round'}
		>
			{icons[name]}
		</svg>
	)
}

export default Icon