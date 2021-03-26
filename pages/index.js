import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from '../src/store/actions/characterAction'

import Head from 'next/head'
import ContainerList from '@containers/ContainerListPokemons'
import Pokedex from '@components/Pokedex'
import SearchBar from '@components/SearchBar'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons({ limit: 30 }))
  }, [])

  return (
  <>
    <Head>
      <title>Pokédex</title>
    </Head>
    <div className='layout__nav'>
      <SearchBar />
      <div className='layout__carrusel'>
        <ContainerList />
      </div>
    </div>
    <div>
      <Pokedex />
    </div>
  </>
  )
}
export default Index
