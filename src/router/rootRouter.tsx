import {createBrowserRouter} from "react-router-dom"

import HomePage from "../pages/HomePage"
import SearchPage from "../pages/SearchPage"
import BookPage from "../pages/BookPage"
import FavoritesPage from "../pages/FavoritesPage"
import CartPage from "../pages/CartPage"
import LoginPage from "../pages/LoginPage"
import ResetPasswordPage from "../pages/ResetPasswordPage"
import AccountPage from "../pages/AccountPage"
import NotFoundPage from "../pages/NotFoundPage"

import homeLoader from "./loaders/homeLoader"
import searchLoader from "./loaders/searchLoader"
import bookLoader from "./loaders/bookLoader"
import favoritesLoader from "./loaders/favoritesLoader"
import cartLoader from "./loaders/cartLoader"
import loginLoader from "./loaders/loginLoader"
import resetPasswordLoader from "./loaders/resetPasswordLoader"
import accountLoader from "./loaders/accountLoader"
import notFoundLoader from "./loaders/notFoundLoader"

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage/>,
		loader: homeLoader,
	},
	{
		path: '/search/:value',
		element: <SearchPage/>,
		loader: searchLoader,
		children: [
			{
				path: ':page',
				element: <SearchPage/>,
				loader: searchLoader,
			},
		],
	},
	{
		path: '/book/:id',
		element: <BookPage/>,
		loader: bookLoader,
	},
	{
		path: '/favorites',
		element: <FavoritesPage/>,
		loader: favoritesLoader,
	},
	{
		path: '/cart',
		element: <CartPage/>,
		loader: cartLoader,
	},
	{
		path: '/login',
		element: <LoginPage/>,
		loader: loginLoader,
	},
	{
		path: '/reset-password',
		element: <ResetPasswordPage/>,
		loader: resetPasswordLoader,
	},
	{
		path: '/account',
		element: <AccountPage/>,
		loader: accountLoader,
	},
	{
		path: '*',
		element: <NotFoundPage/>,
		loader: notFoundLoader,
	},
])

export default router