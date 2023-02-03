import React from 'react'
import ReactDOM from 'react-dom/client'
import {PersistGate} from 'redux-persist/integration/react'

import {Provider} from "react-redux"
import {persistor, store} from "./store/store"

import {RouterProvider} from "react-router-dom"
import router from "./router/rootRouter"

import "./styles/reset.scss"
import "./styles/global.scss"

import ErrorBoundary from "./components/errorBoundary/ErrorBoundary"
import Spinner from "./ui/spinner/Spinner"

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate
          loading={<Spinner className={'spinner'}/>}
          persistor={persistor}
        >
          <RouterProvider
            router={router}
            fallbackElement={<Spinner className={'spinner'}/>}
          />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
)

reportWebVitals()
