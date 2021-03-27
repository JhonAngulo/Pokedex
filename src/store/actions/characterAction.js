import * as types from '../types'

export const getPokemons = ({ limit, offset = 0 }) => ({
  type: types.CHARACTERS_GET,
  limit,
  offset
})

export const selectedPokemon = (pokemon) => ({
  type: types.CHARACTERS_SELECTED,
  pokemon
})

export const searchError = ({ message }) => ({
  type: types.SEARCH_ERROR,
  message
})
