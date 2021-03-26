const BASE_URL = 'https://pokeapi.co/api/v2/'

function getCharacters ({ limit }) {
  return fetch(`${BASE_URL}pokemon?limit=${limit}`)
    .then((res) => res.json())
}

function getCharacter ({ url }) {
  return fetch(`${url}`).then((res) => res.json())
}

export default {
  getCharacters,
  getCharacter
}
