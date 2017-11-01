import { combineEpics } from 'redux-observable'
import { fetchGiftsListEpic } from './giftsActions'

const rootEpic = combineEpics(
  fetchGiftsListEpic,
)

export default rootEpic
