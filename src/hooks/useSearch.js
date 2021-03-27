import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { selectedPokemon, searchError } from '../store/actions/characterAction'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

function useSearch () {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  useEffect(async () => {
    if (input) {
      let search = await fetch(`${BASE_URL}${input}`)
      if (search.status === 200) {
        search = await search.json()
        const pokemon = {
          id: search.id,
          name: search.name,
          types: search.types,
          abilities: search.abilities,
          imagen: search.sprites.front_default
        }
        dispatch(selectedPokemon(pokemon))
        setInput('')
      } else {
        dispatch(searchError({ message: `Search failed for ${input}` }))
      }
    }
  }, [input])

  return {
    setInput
  }
}

export default useSearch
