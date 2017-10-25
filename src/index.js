import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './data/configureStore'
import Router from './router'

export const initializeServiceWorker = () => {
  return navigator.serviceWorker ? registerServiceWorker(navigator.serviceWorker) : gracefulFallback(navigator)
}

const registerServiceWorker = (worker) => {
  // the 'progressive' part of progressive web apps
  return worker.register('serviceWorker.bundle.js')
    .then(reg => console.log('ServiceWorker registration successful with scope: %o', reg))
    .catch(err => console.log('ServiceWorker registration failed: %o', err))
}

const gracefulFallback = (navigator) => {
  return console.warn("Browser does't support ServiceWorker; navigator: %o", navigator)
}

// initializeServiceWorker()

const store = configureStore()

render(
  <Provider store={ store }>
    <Router />
  </Provider>,
  document.getElementById('root')
)
