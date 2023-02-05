import {useState} from "react"

import TypingEmail from "./components/typingEmail/TypingEmail"
import TypingNewPassword from "./components/typingNewPassword/TypingNewPassword"

import styles from "./styles/ResetPassword.module.scss"

const ResetPassword = () => {
	const [userId, setUserId] = useState('')

	return (
		<div className={styles.container}>
			{!userId
				? <TypingEmail onChangeUserId={setUserId}/>
				: <TypingNewPassword userId={userId}/>
			}
		</div>
	)
}

export default ResetPassword