import 'babel-polyfill'

import { APP_CONTAINER_SELECTOR } from '../shared/config'

document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = '<h1>Hello Webpack - Mark 2!</h1>'
