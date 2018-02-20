import * as types from './constants'
import rxjs from 'rxjs'
import { Observable} from 'rxjs/Observable'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { map } from 'rxjs/operator/map'
import firebase from 'firebase'
import 'firebase/firestore'

import { db } from '../api/dontKnowYet'

// action creators
export const fetchGiftsListAction = () => ({ type: types.FETCH_GIFTS_LIST})
export const addGiftAction = (giftObj) => ({ type: types.ADD_GIFT, giftObj})

const fetchGiftsListSuccessAction = response => ({ type: types.FECTH_GIFTS_LIST_SUCCESS, response })

/* Epics */
// Fetch all gifts
export const fetchGiftsListEpic = (action$, store) => {
  const giftsList = Observable.from(
    db.collection("gifts").get()
      .then((querySnapshot) => querySnapshot.docs)
  )

  return action$.ofType(types.FETCH_GIFTS_LIST)
    .switchMap((action) => mapGiftsList(giftsList))
}

// Add a gift
export const addGiftEpic = (action$, store) => {
  const gift = Observable.from(
    db.collection("gifts").add({
      name: "Massa",
    })
  )

  return action$.ofType(types.ADD_GIFT)
    .do((action) => {
      console.log('action in add', action)
      return
    })
}

/* Helpers */
const mapGiftsList = (giftsList) => {
  console.log('giftsList', giftsList)
  return giftsList.map(
    (data) => {
      // TODO can replace with the success action above
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
