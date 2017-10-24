import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { history } from './config/history'
import Main from './views/Main'
import HomeScreen from './views/HomeScreen'
import AltScreen from './views/AltScreen'

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route path="/" component={HomeScreen} />
      <Route path="/alt" component={AltScreen} />
    </div>
  </ConnectedRouter>
)

export default Router
