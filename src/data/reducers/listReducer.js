import * as types from '../actions/constants'

let initialState = {
  list: []
}

export const listReducer = (state = initialState, action) => {
  console.log('action', action)
  if (action.response) {
    console.log('action.response', action.response)
    return Object.assign({}, state, {list: action.response})
  }

  return state;
}
