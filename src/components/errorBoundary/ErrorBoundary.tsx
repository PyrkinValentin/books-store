import React, { Component, ErrorInfo } from "react"

import Header from "../../modules/header/Header"
import Error from "../error/Error"

import {Props, State} from "./types/ErrorBoundaryTypes"

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false
	}

	public static getDerivedStateFromError(_: Error): State {
		return { hasError: true }
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo)
	}

	public render() {
		if (this.state.hasError) {
			return (
				<>
					<Header/>
					<Error text={'Oops. an application error occurred'}/>
				</>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary