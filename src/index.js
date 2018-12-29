import React from 'react'
import ReactDOM from 'react-dom'
import './i18n'
import 'vendor/modernizr.min.js'
import 'react-toastify/dist/ReactToastify.css'
import 'vendor/materialize.min.css'
import 'vendor/materialize.min.js'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const { PUBLIC_URL } = process.env

const app = (
  <BrowserRouter basename={PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
