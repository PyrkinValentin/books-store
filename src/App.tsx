import {RouterProvider} from "react-router-dom"
import router from "./router/rootRouter"

import {Provider} from "react-redux"
import {store} from "./store/store"

import "./styles/reset.scss"
import "./styles/global.scss"

import Layout from "./components/layout/Layout"
import Spinner from "./ui/spinner/Spinner"

function App() {
  return (
    <Layout>
      <Provider store={store}>
        <RouterProvider
          router={router}
          fallbackElement={<Spinner className={'spinner'}/>}
        />
      </Provider>
    </Layout>
  )
}

export default App