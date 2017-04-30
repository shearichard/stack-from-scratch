import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

/* REACT hot loader changes start +++++++++++++++++++++++++++++++++++++++++++++ */
import { AppContainer } from 'react-hot-loader'
/* REACT hot loader changes stop  +++++++++++++++++++++++++++++++++++++++++++++ */

import App from './app'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

/* REACT hot loader changes start +++++++++++++++++++++++++++++++++++++++++++++ */
// document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = '<h1>Hello Webpack - Mark 2!</h1>'
// ReactDOM.render(<App />, document.querySelector(APP_CONTAINER_SELECTOR))
const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = AppComponent =>
  <AppContainer>
    <AppComponent />
  </AppContainer>

ReactDOM.render(wrapApp(App), rootEl)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default
    ReactDOM.render(wrapApp(NextApp), rootEl)
  })
}
/* REACT hot loader changes stop  +++++++++++++++++++++++++++++++++++++++++++++ */
