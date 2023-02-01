import {useEffect} from "react"

const useScrollLock = (on: boolean) => {
	useEffect(() => {
		document.body.style.overflow = on ? 'hidden' : ''
	}, [on])
}

export default useScrollLock