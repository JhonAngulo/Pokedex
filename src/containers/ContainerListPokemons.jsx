import { useEffect, useRef, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

import debounce from 'just-debounce-it'
import useSelected from '../hooks/useSeleted'
import useGetCharacters from '../hooks/useGetCharacters'
import useNearScreen from '../hooks/useNearScreen'

import CardPokemon from '@components/CardPokemon'

const ContainerListPokemons = () => {
  const [loading, setLoading] = useState(true)
  const { list } = useSelector(state => state.characters)
  const { handleSelect } = useSelected()
  const getPlus = useGetCharacters()
  const rootElement = useRef()
  const element = useRef()

  const { isNearScreen } = useNearScreen({
    rootElement: rootElement,
    externalRef: element,
    once: false
  })

  const debounceHandleNextPage = useCallback(debounce(
    () => getPlus({ offset: Object.keys(list).length }), 300
  ), [list])

  useEffect(() => {
    if (!loading && isNearScreen) {
      debounceHandleNextPage()
    }
  }, [isNearScreen])

  useEffect(() => {
    if (list.length > 0) {
      setLoading(false)
    }
  }, [list])

  return (
    <div className='layout__carrusel' ref={rootElement}>
      {
        list.map((item) => {
          return (
            <CardPokemon key={`list-${item.id}`} {...item} handleClick={handleSelect}/>
          )
        })
      }
      <div ref={element}></div>
    </div>
  )
}

export default ContainerListPokemons
