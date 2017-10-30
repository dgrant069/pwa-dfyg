import * as types from '../actions/constants'

let initialState = {
  list: []
}

export const listReducer = (state = initialState, action) => {
  if (action.response) {
    return Object.assign({}, state, {list: action.response})
  }

  return state;
}
