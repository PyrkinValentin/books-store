import {FormEvent, useEffect, useState} from "react"
import {Link} from "react-router-dom"

import useAppDispatch from "../../../../hooks/useAppDispatch"
import useAppSelector from "../../../../hooks/useAppSelector"
import useHead from "../../../../hooks/useHead"

import Warning from "../../../../components/warning/Warning"
import Button from "../../../../ui/button/Button"
import Input from "../../../../ui/input/Input"

import {setUser} from "../../../../store/slices/userSlice"

import styles from "./styles/Login.module.scss"

const Login = () => {
	const dispatch = useAppDispatch()

	const [warning, setWarning] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const users = useAppSelector((state) => state.dbReducer.users)

	useEffect(() => {
		setWarning('')
	}, [email, password])

	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const isChangedPassword = Boolean(params.get('changedPassword'))

		if (isChangedPassword) {
			setWarning('Your password has been changed!')
		}
	}, [])

	useHead({
		title: 'Login to your account'
	})

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault()

		const user = users.find(
			(user) => user.email === email
		)

		if (!user) {
			setWarning('Not user db')
			return
		}

		if (user.password !== password) {
			setWarning('Incorrect password')
			return
		}

		dispatch(
			setUser({
				loggedIn: true,
				email: user.email,
				username: user.username,
			})
		)
	}

	return (
		<>
			{Boolean(warning) &&
				<Warning text={warning} view={true}/>
			}

			<form onSubmit={handleSubmitForm}>
				<Input
					type={'email'}
					value={email}
					autoCorrect={'off'}
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

				<Link to={'/reset-password'}>Forgot password?</Link>

				<Button
					className={styles.submit}
					disabled={!Boolean(email.length) || password.length < 6}
				>
					SIGN IN
				</Button>
			</form>
		</>
	)
}

export default Login