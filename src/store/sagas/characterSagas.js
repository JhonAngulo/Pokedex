import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from '../types'
import Api from '../api'

function * fetchList ({ limit }) {
  try {
    console.log('runnnn', limit)

    const characters = []

    const list = yield call(Api.getCharacters, { limit })

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

function * charactersSaga () {
  yield takeLatest(types.CHARACTERS_GET, fetchList)
}

export default charactersSaga
