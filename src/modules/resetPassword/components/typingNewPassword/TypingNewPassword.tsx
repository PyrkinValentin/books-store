import {FC, FormEvent, useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

import useAppDispatch from "../../../../hooks/useAppDispatch"

import Warning from "../../../../components/warning/Warning"
import Input from "../../../../ui/input/Input"
import Button from "../../../../ui/button/Button"

import {editUser} from "../../../../store/slices/dbSlice"

import {TypingPasswordProps} from "./types/TypingNewPasswordTypes"
import styles from "./styles/TypingNewPassword.module.scss"

const TypingNewPassword: FC<TypingPasswordProps> = ({user}) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const [warning, setWarning] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	useEffect(() => {
		setWarning('')
	}, [])

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			setWarning('Passwords must be the same')
			return
		}

		dispatch(
			editUser({
				...user,
				password
			})
		)

		navigate('/login?changedPassword=true')
	}

	return (
		<>
			<h1 className={styles.title}>New password</h1>

			{Boolean(warning) &&
				<Warning text={warning} view={true}/>
			}

			<form onSubmit={handleSubmitForm}>
				<Input
					value={password}
					type={'password'}
					label={'Password'}
					placeholder={'Your password'}
					autoCorrect={'off'}
					onChange={setPassword}
				/>

				<Input
					value={confirmPassword}
					type={'password'}
					label={'Confirm password'}
					placeholder={'Confirm your password'}
					autoCorrect={'off'}
					onChange={setConfirmPassword}
				/>

				<Button
					className={styles.submit}
					disabled={!Boolean(password.length) || !Boolean(confirmPassword.length)}
				>
					Reset
				</Button>
			</form>
		</>
	)
}

export default TypingNewPassword