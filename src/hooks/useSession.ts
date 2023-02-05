import useAppDispatch from "./useAppDispatch"
import useAppSelector from "./useAppSelector"

import {logout} from "../store/slices/userSlice"
import {IUseSession} from "./types/useSessionTypes"

const useSession = (): IUseSession => {
	const dispatch = useAppDispatch()
	const user = useAppSelector((state) => state.userReducer)

	return {
		...user,
		logout: () => dispatch(logout())
	}
}

export default useSession