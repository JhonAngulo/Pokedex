import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCharacters } from '../src/store/actions/characterAction'

import Head from 'next/head'
import ContainerList from '@containers/ContainerListPokemons'
import CardPokemon from '@components/CardPokemon'
import SearchBar from '@components/SearchBar'

const Index = () => {
  const [list, setList] = useState([])
  const [data, setData] = useState({})

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

  useEffect(async () => {
    let list = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
    list = await list.json()
    setList(list.results)
    const url = list.results[0].url
    let pokemon = await fetch(url)
    pokemon = await pokemon.json()
    setData(pokemon)
  }, [])

  return (
  <>
    <Head>
      <title>Pokédex</title>
    </Head>
    <div>
      <SearchBar />
      <ContainerList list={list} />
    </div>
    <div>
      <CardPokemon pokemon={data} />
    </div>
  </>
  )
}
export default Index
