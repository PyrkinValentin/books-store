import {FormEvent, useState, MouseEvent, useEffect} from "react"
import {useNavigate} from "react-router-dom"

import useSession from "../../hooks/useSession"
import useAppDispatch from "../../hooks/useAppDispatch"
import useAppSelector from "../../hooks/useAppSelector"

import Warning from "../../components/warning/Warning"
import Input from "../../ui/input/Input"
import Button from "../../ui/button/Button"

import {editUser} from "../../store/slices/dbSlice"
import styles from "./styles/Account.module.scss"

const Account = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const {id} = useSession()

	const dbUsers = useAppSelector((state) => state.dbReducer.users)
	const user = dbUsers.find((user) => user.id === id)

	const [warning, setWarning] = useState('')

	const [username, setUsername] = useState(user?.username ?? '')
	const [email, setEmail] = useState(user?.email ?? '')
	const [password, setPassword] = useState(user?.password ?? '')

	const [newPassword, setNewPassword] = useState('')
	const [confirmNewPassword, setConfirmNewPassword] = useState('')

	useEffect(() => {
		setWarning('')
	}, [username, email, password, newPassword, confirmNewPassword])

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault()

		if (newPassword !== confirmNewPassword) {
			setWarning('Passwords must be the same')
			return
		}

		dispatch(
			editUser({
				id,
				username,
				email,
				password: newPassword || password,
			})
		)

		setWarning('Data changed successfully')
	}

	const handleCancelClick = (e: MouseEvent) => {
		e.preventDefault()
		navigate(-1)
	}

	return (
		<>
			{Boolean(warning) &&
				<Warning text={warning} view={true}/>
			}

			<form onSubmit={handleFormSubmit}>
				<h2 className={styles.title}>Profile</h2>

				<div className={styles.container}>
					<Input
						type={'text'}
						placeholder={'Your name'}
						value={username}
						autoCorrect={'off'}
						label={'Name'}
						onChange={setUsername}
					/>

					<Input
						type={'email'}
						placeholder={'Your email'}
						value={email}
						autoCorrect={'off'}
						label={'Email'}
						onChange={setEmail}
					/>
				</div>

				<h2 className={styles.title}>Password</h2>

				<div className={styles.container}>
					<Input
						type={'password'}
						placeholder={'Your password'}
						value={password}
						autoCorrect={'off'}
						label={'Password'}
						onChange={setPassword}
						readOnly={true}
					/>
				</div>

				<div className={styles.container}>
					<Input
						type={'password'}
						placeholder={'Your password'}
						value={newPassword}
						autoCorrect={'off'}
						label={'New password'}
						onChange={setNewPassword}
					/>

					<Input
						type={'password'}
						placeholder={'Confirm new password'}
						value={confirmNewPassword}
						autoCorrect={'off'}
						label={'Confirm new password'}
						onChange={setConfirmNewPassword}
					/>
				</div>

				<div className={styles.group}>
					<div className={styles.group__buttons}>
						<Button
							disabled={
								!Boolean(username) ||
								!Boolean(email)
							}
						>
							Save changes
						</Button>

						<Button
							color={'white'}
							onClick={handleCancelClick}
							className={styles.group__buttons_cancel__button}
						>
							Cancel
						</Button>
					</div>
				</div>
			</form>
		</>
	)
}

export default Account