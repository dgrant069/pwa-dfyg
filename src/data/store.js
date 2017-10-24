import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import devToolsEnhancer from 'remote-redux-devtools'

import rootReducer from './reducers/rootReducer'

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(
          logger
        )
    );
}
