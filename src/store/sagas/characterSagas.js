import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from '../types'
import Api from '../api'

function * fetchList ({ limit, offset }) {
  try {
    const characters = []

    const list = yield call(Api.getCharacters, { limit, offset })

    for (const item of list.results) {
      const pokemon = {}
      const data = yield call(Api.getCharacter, { url: item.url })
      pokemon.name = data.name
      pokemon.id = data.id
      pokemon.abilities = data.abilities
      pokemon.types = data.types
      pokemon.imagen = data.sprites.front_default
      characters.push(pokemon)
    }

    yield put({ type: types.CHARACTERS_SET, payload: characters })
  } catch (e) {
    console.log(e)
    yield put({ type: 'ERROR', message: e.message })
  }
}

function * selected ({ id }) {
  yield put({ type: types.CHARACTERS_SELECTED_CHANGE, payload: id })
}

function * charactersSaga () {
  yield takeLatest(types.CHARACTERS_GET, fetchList)

  yield takeLatest(types.CHARACTERS_SELECTED, selected)
}

export default charactersSaga
