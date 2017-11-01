import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { giftsReducer } from './giftsReducer'

const rootReducer = combineReducers({
  giftsReducer,
  routing: routerReducer,
})

export default rootReducer
