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
  }, [list])

  if (data.loading) {
    return 'loading'
  }

  const { id, name, types, abilities, imagen } = data.character

  return (
    <div className='card-pokemon'>
      <div className='card-pokemon__circles' >
        <div className='card-pokemon__circles--hero'></div>
        <div className='card-pokemon__circles--item'></div>
        <div className='card-pokemon__circles--item'></div>
        <div className='card-pokemon__circles--item'></div>
      </div>
      <div className='card-pokemon__imagen'>
        <figure>
          <img src={imagen} alt={name}/>
        </figure>
      </div>

      <div className='card-pokemon__details'>
        <h3 className='card-pokemon__details--name'>{`#${id} ${name.toUpperCase()}`}</h3>

        <div>
          <p className='card-pokemon__details--subtitle'>Types: </p>{
          types.map((item, i) => (
            <Badge key={`type-${i}`} text={item.type.name}/>
          ))
        }</div>
        <div>
          <p className='card-pokemon__details--subtitle'>Abilities: </p>{
          abilities.map((item, i) => (
            <Badge key={`ability-${i}`} text={item.ability.name} />
          ))
        }</div>
      </div>
    </div>
  )
}

export default CardPokemon
