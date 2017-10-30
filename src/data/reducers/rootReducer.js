import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { listReducer } from './listReducer'

const rootReducer = combineReducers({
  listReducer,
  routing: routerReducer,
})

export default rootReducer
