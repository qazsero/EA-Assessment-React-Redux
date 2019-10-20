import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'

import App from './pages/App'
import reducers from './reducers'

//Application css import
import './assets/styles/base.scss'

const middleware = [thunk]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

ReactDOM.render(
  <Provider  store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
