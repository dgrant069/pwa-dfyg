import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import AltScreen from './views/AltScreen'
import createHistory from 'history/createBrowserHistory'
import HomeScreen from './views/homeScreen/homeScreen'
import MainLayout from './views/mainLayout/mainLayout'
import TestScreen from './views/TestScreen'

export const history = createHistory()

// This will become much different as the app evolves because of react-router 4 changes
const Router = () => (
  <ConnectedRouter history={history}>
    <MainLayout>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/alt" component={AltScreen} />
      <Route path="/test" component={TestScreen} />
    </MainLayout>
  </ConnectedRouter>
)

export default Router
