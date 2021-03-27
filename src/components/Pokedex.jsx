import Badge from '@components/Badge'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const CardPokemon = () => {
  const { selected, error } = useSelector(state => state.characters)

  useEffect(() => {
  }, [selected, error])

  const { id, name, types, abilities, imagen } = selected

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
          {
            name ? <img src={imagen} alt={name}/> : error ? 'Fail!' : 'No selected'
          }

        </figure>
      </div>

      <div className='pokedex__details'>
        {
          name
            ? <h3 className='pokedex__details--name'>{`#${id} ${name.toUpperCase()}`}</h3>
            : <h3 className='pokedex__details--name'>{error || 'please! select a pokemon'}</h3>
        }

        {
          name && <>
          <div>
          <p className='pokedex__details--subtitle'>Types: </p>
          {
            types.map((item, i) => (
              <Badge key={`type-${i}`} text={item.type.name}/>
            ))
          }
        </div>
        <div>
          <p className='pokedex__details--subtitle'>Abilities: </p>
          {
            abilities.map((item, i) => (
              <Badge key={`ability-${i}`} text={item.ability.name} />
            ))
          }
        </div>
          </>
        }
      </div>
    </div>
  )
}

export default CardPokemon
