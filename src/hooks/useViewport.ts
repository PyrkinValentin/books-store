import {useEffect, useState} from "react"
import initViewport from "../helpers/initViewport"
import {IViewport} from "../types/viewport"

const useViewport = (): IViewport => {
	const [viewport, setViewport] = useState(initViewport)

	useEffect(() => {
		const callback = () => setViewport(initViewport)

		window.addEventListener('resize', callback)

		return () => window.removeEventListener('resize', callback)
	}, [])

	return viewport
}

export default useViewport