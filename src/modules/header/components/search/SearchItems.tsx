import {Link} from "react-router-dom"

import {SearchItemsProps} from "./types/SearchItemsTypes"
import styles from "./styles/SearchItems.module.scss"

const SearchItems = ({books}: SearchItemsProps) => {
	return (
		<ul className={styles.items}>
			{books.map((book) =>
				<li key={book.isbn13}>
					<Link
						to={`/book/${book.isbn13}`}
						className={styles.items__link}
					>
						<img src={book.image} alt={book.title}/>
						{book.title}
					</Link>
				</li>
			)}
		</ul>
	)
}

export default SearchItems