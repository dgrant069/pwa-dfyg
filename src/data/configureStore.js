import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

import { history } from '../config/history'
import rootReducer from './reducers/rootReducer'

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(
          routerMiddleware(history),
          createLogger(),
        )
    )
}

export default configureStore
