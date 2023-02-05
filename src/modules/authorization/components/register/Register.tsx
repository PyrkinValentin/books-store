import {FormEvent, useEffect, useState} from "react"

import useAppDispatch from "../../../../hooks/useAppDispatch"
import useAppSelector from "../../../../hooks/useAppSelector"
import useHead from "../../../../hooks/useHead"

import Warning from "../../../../components/warning/Warning"
import Input from "../../../../ui/input/Input"
import Button from "../../../../ui/button/Button"

import {addUser} from "../../../../store/slices/dbSlice"

import styles from "./styles/Register.module.scss"

const Register = () => {
	const dispatch = useAppDispatch()

	const [warning, setWarning] = useState('')
	const [successRegister, setSuccessRegister] = useState(false)

	const [username, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const users = useAppSelector((state) => state.dbReducer.users)

	useEffect(() => {
		setWarning('')
	}, [username, email, password, confirmPassword])

	useHead({
		title: 'Create new account'
	})

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault()

		const user = users.find(
			(user) => user.email === email
		)

		if (user) {
			setWarning('There is already a user with this email')
			return
		}

		if (password !== confirmPassword) {
			setWarning('Passwords must be the same')
			return
		}

		dispatch(
			addUser({
				username,
				password,
				email,
			})
		)

		setWarning('Success register')
		setSuccessRegister(true)
	}

	return (
		<>
			{Boolean(warning) &&
				<Warning text={warning} view={true}/>
			}

			{!successRegister &&
				<form onSubmit={handleSubmitForm}>
					<Input
						type={'text'}
						value={username}
						autoCorrect={'off'}
						placeholder={'Your name'}
						label={'Name'}
						onChange={setUserName}
					/>

					<Input
						type={'email'}
						value={email}
						placeholder={'Your email'}
						label={'Email'}
						onChange={setEmail}
					/>

					<Input
						type={'password'}
						value={password}
						placeholder={'Your password'}
						label={'Password'}
						onChange={setPassword}
					/>

					<Input
						type={'password'}
						value={confirmPassword}
						placeholder={'Confirm your password'}
						label={'Confirm password'}
						onChange={setConfirmPassword}
					/>

					<Button
						className={styles.submit}
						disabled={
							!Boolean(username.length) ||
							!Boolean(email.length) ||
							!Boolean(password.length) ||
							!Boolean(confirmPassword.length)
						}
					>
						SIGN UP
					</Button>
				</form>
			}
		</>
	)
}

export default Register