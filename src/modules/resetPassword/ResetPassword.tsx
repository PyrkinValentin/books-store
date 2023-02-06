import {useState} from "react"

import TypingEmail from "./components/typingEmail/TypingEmail"
import TypingNewPassword from "./components/typingNewPassword/TypingNewPassword"

import {IDbUser} from "../../store/slices/types/dbSliceTypes"
import styles from "./styles/ResetPassword.module.scss"

const ResetPassword = () => {
	const [user, setUser] = useState<IDbUser>({id:'', password:'', email:'', username:''})

	return (
		<div className={styles.container}>
			{!user.id
				? <TypingEmail onChangeUser={setUser}/>
				: <TypingNewPassword user={user}/>
			}
		</div>
	)
}

export default ResetPassword