import * as types from '../types'

export const getPokemons = ({ limit }) => ({
  type: types.CHARACTERS_GET,
  limit
})
