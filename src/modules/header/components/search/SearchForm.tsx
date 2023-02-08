import {ChangeEvent} from "react"

import useAppDispatch from "../../../../hooks/useAppDispatch"
import useAppSelector from "../../../../hooks/useAppSelector"

import Icon from "../../../../ui/icon/Icon"

import {setInput, setShowResults} from "../../../../store/slices/searchSlice"
import classNames from "../../../../helpers/classNames"

import styles from "./styles/SearchForm.module.scss"

const SearchForm = () => {
	const dispatch = useAppDispatch()
	const input = useAppSelector((state) => state.searchReducer.input)

	const handleInputClick = () => {
		dispatch(
			setShowResults(input.length >= 3)
		)
	}

	const handleSetInput = (value: string) => {
		dispatch(
			setInput(value)
		)
	}

	const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		
		handleSetInput(value)

		dispatch(
			setShowResults(value.length >= 3)
		)
	}

	const handleInputClear = () => {
		handleSetInput('')
	}

	const inputBackgroundStyle = input.length >= 3
		? styles.form__label__bg
		: undefined

	return (
		<form className={styles.form} onSubmit={handleFormSubmit}>
			<label
				className={classNames(styles.form__label, inputBackgroundStyle)}
				onClick={handleInputClick}
			>
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
						type={'button'}
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