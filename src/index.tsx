import React from 'react'
import ReactDOM from 'react-dom/client'

import ErrorBoundary from "./components/errorBoundary/ErrorBoundary"

import {Provider} from "react-redux"
import {store} from "./store/store"

import {RouterProvider} from "react-router-dom"
import router from "./router/rootRouter"

import "./styles/reset.scss"
import "./styles/global.scss"

import Layout from "./components/layout/Layout"
import Spinner from "./ui/spinner/Spinner"

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <Layout>
          <RouterProvider
            router={router}
            fallbackElement={<Spinner className={'spinner'}/>}
          />
        </Layout>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
)

reportWebVitals()
