import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.less'
import './styles/index.less'
import configureStore from './stores'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import App from './App'
import './mock'

const store = configureStore()

const render = (Router: any) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

// hmr enable
if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./App', () => {
    const Router = require('./App').default
    render(Router)
  })
}

serviceWorker.unregister()
