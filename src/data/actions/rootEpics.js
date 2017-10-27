import { combineEpics } from 'redux-observable'
import { fetchListEpic } from './listActions'

const rootEpic = combineEpics(
  fetchListEpic,
)

export default rootEpic
