import React from 'react'
import ReactDOM from 'react-dom'
import './i18n'
import './index.css'
import 'vendor/modernizr.min.js'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { defaults } from 'react-chartjs-2'

// lineChartOptions: {
//   responsive: true,
//     maintainAspectRatio: true,
//       tooltips: {
//     enabled: true,
//       },
//   scales: {
//     xAxes: [
//       {
//         ticks: {
//           autoSkip: true,
//           maxTicksLimit: 10,
//         },
//       },
//     ],
//       },
// },

// defaults.global.animation = false

const { PUBLIC_URL } = process.env

const app = (
  <BrowserRouter basename={PUBLIC_URL}>
    <App />
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
