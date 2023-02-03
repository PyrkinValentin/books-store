import storage from "redux-persist/lib/storage"
import blacklist from "./blacklist"


const persistConfig = {
	key: 'root',
	storage,
	blacklist,
}

export default persistConfig