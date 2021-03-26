import * as types from '../types'

export const getPokemons = ({ limit, offset = 0 }) => ({
  type: types.CHARACTERS_GET,
  limit,
  offset
})

export const selectedPokemon = ({ id }) => ({
  type: types.CHARACTERS_SELECTED,
  id
})
