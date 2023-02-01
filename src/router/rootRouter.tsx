import {createBrowserRouter} from "react-router-dom"

import Home from "../pages/Home"
import Search from "../pages/Search"
import NotFound from "../pages/NotFound"

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home/>,
		loader: () => {
			document.title = 'Home'
			return null
		},
	},
	{
		path: '/search/:searchItem',
		element: <Search/>,
		loader: ({request}) => {
			document.title = 'Search'
			return null
		},
	},
	{
		path: '*',
		element: <NotFound/>,
		loader: () => {
			document.title = '404 not found'
			return null
		},
	},
])

export default router