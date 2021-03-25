import Head from 'next/head'
import CardPokemon from '@components/CardPokemon'
import { useEffect, useState } from 'react'

const Index = () => {
  const [data, setData] = useState({})

  useEffect(async () => {
    let list = await fetch('https://pokeapi.co/api/v2/pokemon')
    list = await list.json()
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
      <h1>Bienvenido!</h1>
    </div>
    <div>
      <CardPokemon pokemon={data} />
    </div>
  </>
  )
}
export default Index
