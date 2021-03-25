import { put, takeLatest } from 'redux-saga/effects'

import * as types from '../types'

function * fetchUser (action) {
  try {
    console.log('escuchando sagas')
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

function * charactersSaga () {
  yield takeLatest(types.GET_CHARACTERS, fetchUser)
}

export default charactersSaga
