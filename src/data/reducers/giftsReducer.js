import * as types from '../actions/constants'

let initialState = {
  giftsList: []
}

export const giftsReducer = (state = initialState, action) => {
  if (action.response) {
    return Object.assign({}, state, {giftsList: action.response})
  }

  return state;
}
