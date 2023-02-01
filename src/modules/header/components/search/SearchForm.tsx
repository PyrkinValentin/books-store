import {ChangeEvent} from "react"

import useAppDispatch from "../../../../hooks/useAppDispatch"
import useAppSelector from "../../../../hooks/useAppSelector"

import Icon from "../../../../ui/icon/Icon"

import {setInput} from "../../features/searchSlice"

import styles from "./styles/SearchForm.module.scss"

const SearchForm = () => {
	const dispatch = useAppDispatch()
	const input = useAppSelector((state) => state.searchReducer.input)

	const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(
			setInput(e.target.value)
		)
	}

	const handleInputClear = () => {
		dispatch(
			setInput('')
		)
	}

	return (
		<form className={styles.form} onSubmit={handleFormSubmit}>
			<label className={styles.form__label}>
				<input
					value={input}
					type={'search'}
					placeholder={'Search'}
					autoComplete={'off'}
					className={styles.form__label_input}
					onChange={handleInputChange}
				/>

				{Boolean(input.length) ? (
					<button
						className={styles.form__label_icon}
						onClick={handleInputClear}
					>
						<Icon name={'x'}/>
					</button>
				) : (
					<span
						className={styles.form__label_icon}
					>
							<Icon name={'search'}/>
						</span>
				)}
			</label>
		</form>
	)
}

export default SearchForm