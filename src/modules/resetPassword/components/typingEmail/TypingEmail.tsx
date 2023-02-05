import {FC, FormEvent, useEffect, useState} from "react"
import useAppSelector from "../../../../hooks/useAppSelector"

import Warning from "../../../../components/warning/Warning"
import Input from "../../../../ui/input/Input"
import Button from "../../../../ui/button/Button"

import {TypingEmailProps} from "./types/TypingEmailTypes"
import styles from "./styles/TypingEmail.module.scss"

const TypingEmail: FC<TypingEmailProps> = ({onChangeUserId}) => {
	const [warning, setWarning] = useState('')
	const [email, setEmail] = useState('')

	const users = useAppSelector((state) => state.dbReducer.users)

	useEffect(() => {
		setWarning('')
	}, [email])

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault()

		const user = users.find(
			(user) => user.email === email
		)

		if (!user) {
			setWarning('Not user db')
			return
		}

		onChangeUserId(user.id)
	}

	return (
		<>
			<h1 className={styles.title}>Reset password</h1>

			{Boolean(warning) &&
				<Warning text={warning} view={true}/>
			}

			<form onSubmit={handleSubmitForm}>
				<Input
					value={email}
					type={'email'}
					label={'Email'}
					placeholder={'Your email'}
					autoCorrect={'off'}
					onChange={setEmail}
				/>

				<Button
					className={styles.submit}
					disabled={!Boolean(email.length)}
				>
					Reset
				</Button>
			</form>
		</>
	)
}

export default TypingEmail