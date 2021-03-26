import Badge from '@components/Badge'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const CardPokemon = () => {
  const { list, selected } = useSelector(state => state.characters)

  const [data, setData] = useState({
    loading: true,
    character: {},
    error: null
  })

  useEffect(() => {
    if (list.length > 0) {
      const filter = list.filter((item) => item.id === selected)
      setData({
        ...data,
        character: filter[0],
        loading: false
      })
    }
  }, [list, selected])

  if (data.loading) {
    return 'loading'
  }

  const { id, name, types, abilities, imagen } = data.character

  return (
    <div className='pokedex'>
      <div className='pokedex__circles' >
        <div className='pokedex__circles--hero'></div>
        <div className='pokedex__circles--item'></div>
        <div className='pokedex__circles--item'></div>
        <div className='pokedex__circles--item'></div>
      </div>
      <div className='pokedex__imagen'>
        <figure>
          <img src={imagen} alt={name}/>
        </figure>
      </div>

      <div className='pokedex__details'>
        <h3 className='pokedex__details--name'>{`#${id} ${name.toUpperCase()}`}</h3>

        <div>
          <p className='pokedex__details--subtitle'>Types: </p>{
          types.map((item, i) => (
            <Badge key={`type-${i}`} text={item.type.name}/>
          ))
        }</div>
        <div>
          <p className='pokedex__details--subtitle'>Abilities: </p>{
          abilities.map((item, i) => (
            <Badge key={`ability-${i}`} text={item.ability.name} />
          ))
        }</div>
      </div>
    </div>
  )
}

export default CardPokemon
