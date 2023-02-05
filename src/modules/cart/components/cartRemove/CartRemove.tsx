import {FC} from "react"

import useAppDispatch from "../../../../hooks/useAppDispatch"
import Icon from "../../../../ui/icon/Icon"

import {removeCart} from "../../../../store/slices/cartSlice"
import {CartRemoveProps} from "./types/CartRemoveTypes"

import styles from "./styles/CartRemove.module.scss"

const CartRemove: FC<CartRemoveProps> = ({isbn13}) => {
	const dispatch = useAppDispatch()

	const handleRemove = (id: string) => {
		dispatch(
			removeCart(id)
		)
	}

	return (
		<button
			className={styles.delete}
			onClick={() => handleRemove(isbn13)}
		>
			<Icon name={'x'}/>
		</button>
	)
}

export default CartRemove