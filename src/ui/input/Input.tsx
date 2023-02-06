import {ChangeEvent, FC} from "react"

import Icon from "../icon/Icon"
import {InputProps} from "./types/InputTypes"

import styles from "./styles/Input.module.scss"

const Input: FC<InputProps> = (props) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChange(e.target.value)
	}

	const handleClear = () => {
		props.onChange('')
	}

	return (
		<label className={styles.label}>
			{Boolean(props.label) &&
				<span className={styles.title}>{props.label}</span>
			}

			<span className={styles.input}>
				<input
					type={props.type}
					name={props.name}
					value={props.value}
					placeholder={props.placeholder}
					autoCorrect={props.autoCorrect}
					onChange={handleChange}
					onKeyDown={props.onKeyDown}
					readOnly={props.readOnly}
				/>

				{Boolean(props.value.length) && !props.readOnly &&
					<div className={styles.clear} onClick={handleClear}>
						<Icon name={'x'}/>
					</div>
				}
			</span>
		</label>
	)
}

export default Input