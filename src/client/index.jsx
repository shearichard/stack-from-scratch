import 'babel-polyfill'
/* REACT changes start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
/* REACT changes stop  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

import { APP_CONTAINER_SELECTOR } from '../shared/config'

/* REACT changes start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = '<h1>Hello Webpack - Mark 2!</h1>'
ReactDOM.render(<App />, document.querySelector(APP_CONTAINER_SELECTOR))
/* REACT changes stop  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
