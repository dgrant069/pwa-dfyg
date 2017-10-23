import React from 'react';
import { render } from 'react-dom';

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

initializeServiceWorker()

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Service Workers in React?</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
)
