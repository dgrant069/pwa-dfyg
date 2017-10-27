import * as types from './constants'
import rxjs from 'rxjs'
import { Observable} from 'rxjs/Observable'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { map } from 'rxjs/operator/map'

// action creators
export const fetchList = () => ({ type: types.FETCH_LIST })
const fetchListSuccess = response => ({ type: types.FECTH_LIST_SUCCESS, response })

const seeds = Observable.fromPromise(
  fetch('/listSeeds.json')
    .then(response => response.json())
)

const mapSeeds = () =>
  seeds.map(
    (data) => {
      console.log('success response', data)
      return {
        type: types.FECTH_LIST_SUCCESS,
        response: data
      }
    },
    (error) => {
      console.log('error response', error)
      return {
        type: 'FECTH_LIST_ERROR',
        error
      }
    }
  )

// epic
export const fetchListEpic = (action$, store) => {
  return action$.ofType(types.FETCH_LIST)
    .switchMap((action) => {
      return mapSeeds()
    })
}
