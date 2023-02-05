import {FC} from "react"

import useAppDispatch from "../../../../hooks/useAppDispatch"

import Icon from "../../../../ui/icon/Icon"

import {decreaseCountCart, increaseCountCart} from "../../../../store/slices/cartSlice"
import {CartCounterProps} from "./types/CartCounterTypes"

import styles from "./styles/CartCounter.module.scss"

const CartCounter: FC<CartCounterProps> = ({isbn13, count}) => {
	const dispatch = useAppDispatch()

	const handleIncrease = () => {
		dispatch(
			increaseCountCart(isbn13)
		)
	}

	const handleDecrease = () => {
		dispatch(
			decreaseCountCart(isbn13)
		)
	}

	return (
		<div className={styles.counter}>
			<button onClick={handleDecrease}>
				<Icon name={'minus'}/>
			</button>

			{count}

			<button onClick={handleIncrease}>
				<Icon name={'plus'}/>
			</button>
		</div>
	)
}

export default CartCounter