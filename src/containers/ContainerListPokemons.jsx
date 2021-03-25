import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const ContainerListPokemons = () => {
  const { list } = useSelector(state => state.characters)

  useEffect(() => {
  }, [list])
  return (
    <div>
      {/* {
        list.map((item) => {
          return (
            <p key={`list-${item.name}`}>
              {item.name}
            </p>
          )
        })
      } */}
    </div>
  )
}

export default ContainerListPokemons
