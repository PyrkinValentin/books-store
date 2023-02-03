import {createBrowserRouter} from "react-router-dom"

import Home from "../pages/Home"
import Search from "../pages/Search"
import Book from "../pages/Book"
import NotFound from "../pages/NotFound"

import homeLoader from "./loaders/homeLoader"
import searchLoader from "./loaders/searchLoader"
import bookLoader from "./loaders/bookLoader"
import notFoundLoader from "./loaders/notFoundLoader"

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home/>,
		loader: homeLoader,
	},
	{
		path: '/search/:value',
		element: <Search/>,
		loader: searchLoader,
		children: [
			{
				path: ':page',
				element: <Search/>,
				loader: searchLoader,
			},
		],
	},
	{
		path: '/book/:id',
		element: <Book/>,
		loader: bookLoader,
	},
	{
		path: '*',
		element: <NotFound/>,
		loader: notFoundLoader,
	},
])

export default router