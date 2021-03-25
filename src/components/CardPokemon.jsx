import React from 'react'
import Badge from '@components/Badge'

const CardPokemon = ({ pokemon }) => {
  if (!Object.keys(pokemon).length) {
    return 'loading'
  }

  const { id, name, types, abilities, sprites } = pokemon

  return (
    <div className='card-pokemon'>
      <div className='card-pokemon__imagen'>
        <figure>
          <img src={sprites.front_default} alt=""/>
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
