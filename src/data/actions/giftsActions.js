import * as types from './constants'
import rxjs from 'rxjs'
import { Observable} from 'rxjs/Observable'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { map } from 'rxjs/operator/map'
import firebase from 'firebase'
import 'firebase/firestore'

import { db } from '../api/dontKnowYet'

// action creators
export const fetchGiftsList = () => ({ type: types.FETCH_GIFTS_LIST})
export const addGift = () => ({ type: types.ADD_GIFT})
const fetchGiftsListSuccess = response => ({ type: types.FECTH_GIFTS_LIST_SUCCESS, response })

const giftsList = Observable.from(
  db.collection("gifts").get()
    .then((querySnapshot) => querySnapshot.docs)
)

const mapGiftsList = () => {
  console.log('giftsList', giftsList)
  return giftsList.map(
    (data) => {
      console.log('data', data)
      return {
        type: types.FECTH_GIFTS_LIST_SUCCESS,
        response: data
      }
    },
    (error) => {
      return {
        type: 'FECTH_GIFTS_LIST_ERROR',
        error
      }
    }
  )
}

// Epics
// Fetch all gifts
export const fetchGiftsListEpic = (action$, store) => {
  return action$.ofType(types.FETCH_GIFTS_LIST)
    .switchMap((action) => {
      return mapGiftsList()
    })
}

// Add a gift
export const addGiftEpic = (action$, store) => {
  return action$.ofType(types.ADD_GIFT)
    .switchMap((action) => {
      return mapGiftsList()
    })
}
