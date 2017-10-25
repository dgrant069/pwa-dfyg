import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { history } from './config/history'
import Main from './views/Main'
import HomeScreen from './views/HomeScreen'
import AltScreen from './views/AltScreen'
import TestScreen from './views/TestScreen'

// This will become much different as the app evolves because of react-router 4 changes
const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/alt" component={AltScreen} />
      <Route path="/test" component={TestScreen} />
    </div>
  </ConnectedRouter>
)

export default Router
