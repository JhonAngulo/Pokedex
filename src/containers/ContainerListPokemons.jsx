import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import CardPokemon from '@components/CardPokemon'

const ContainerListPokemons = () => {
  const { list } = useSelector(state => state.characters)

  useEffect(() => {
    console.log(list)
  }, [list])

  return (
    <>
      {
        list.map((item) => {
          return (
            <CardPokemon key={item.id} {...item} />
          )
        })
      }
    </>
  )
}

export default ContainerListPokemons
