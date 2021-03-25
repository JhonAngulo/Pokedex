import * as types from '../types'

// export const fetchCharacters = () => async dispatch => {
//   let characters = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
//   characters = await characters.json()

//   dispatch({
//     type: types.GET_CHARACTERS,
//     payload: characters.results
//   })
// }

export const getPokemons = payload => ({
  type: types.GET_CHARACTERS,
  ...payload
})
