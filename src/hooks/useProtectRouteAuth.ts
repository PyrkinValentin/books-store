import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import useSession from "./useSession"

const useProtectRouteAuth = (isAuthorized: boolean) => {
	const navigate = useNavigate()
	const {loggedIn} = useSession()

	useEffect(() => {
		if (isAuthorized && !loggedIn) {
			navigate('/login')
		}

		if (!isAuthorized && loggedIn) {
			navigate(-1)
		}
	}, [isAuthorized, loggedIn, navigate])
}

export default useProtectRouteAuth