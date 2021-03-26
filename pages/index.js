import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from '../src/store/actions/characterAction'

import Head from 'next/head'
import ContainerList from '@containers/ContainerListPokemons'
import CardPokemon from '@components/CardPokemon'
import SearchBar from '@components/SearchBar'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons({ limit: 15 }))
  }, [])

  return (
  <>
    <Head>
      <title>Pokédex</title>
    </Head>
    <div>
      <SearchBar />
      <ContainerList />
    </div>
    <div>
      <CardPokemon />
    </div>
  </>
  )
}
export default Index
