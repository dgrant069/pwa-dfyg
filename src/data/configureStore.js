import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import rootReducer from './reducers/rootReducer'
import rootEpic from './actions/rootEpics'

const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        createEpicMiddleware(rootEpic),
        createLogger(),
      )
    )
  )
}

export default configureStore
