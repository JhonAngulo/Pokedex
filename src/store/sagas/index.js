import { all } from 'redux-saga/effects'
import charactersSaga from './characterSagas'

export default function * rootSaga () {
  yield all([
    charactersSaga()
  ])
}
