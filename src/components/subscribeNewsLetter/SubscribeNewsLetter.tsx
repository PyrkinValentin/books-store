import Title from "../../ui/title/Title"
import Button from "../../ui/button/Button"

import styles from "./styles/SubscribeNewsLetter.module.scss"

const SubscribeNewsLetter = () => {
	return (
		<div className={styles.container}>
			<Title title={'Subscribe to Newsletter'}/>

			<p className={styles.sub_title}>
				Be the first to know about new IT books, upcoming releases, exclusive offers and more.
			</p>

			<form className={styles.form__subscribe}>
				<label className={styles.form__subscribe__label}>
					<input
						type={'email'}
						placeholder={'Your email'}
						autoCorrect={'off'}
						className={styles.form__subscribe__label__input}
					/>
				</label>

				<Button className={styles.form__subscribe__button}>subscribe</Button>
			</form>
		</div>
	)
}

export default SubscribeNewsLetter