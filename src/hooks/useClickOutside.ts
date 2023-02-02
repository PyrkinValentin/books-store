import {useEffect, useRef} from "react"

const useClickOutside = (callback: () => void) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClick = (e: any) => {
			if (ref.current && !ref.current.contains(e.target)) {
				callback()
			}
		}
		
		document.addEventListener('click', handleClick)
		return () => document.removeEventListener('click', handleClick)
	}, [callback])

	return ref
}

export default useClickOutside