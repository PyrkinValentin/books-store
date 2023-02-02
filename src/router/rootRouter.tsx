import {createBrowserRouter} from "react-router-dom"

import Home from "../pages/Home"
import Search from "../pages/Search"
import NotFound from "../pages/NotFound"

import homeLoader from "./loaders/homeLoader"
import searchLoader from "./loaders/searchLoader"
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
	},
	{
		path: '/search/:value/:page',
		element: <Search/>,
		loader: searchLoader,
	},
	{
		path: '*',
		element: <NotFound/>,
		loader: notFoundLoader,
	},
])

export default router