import React from 'react'

function CardPokemon ({ name, imagen }) {
  return (
    <div className='card-pokemon'>
      <img src={imagen} alt={name} />
      <p className='card-pokemon__name'>{name}</p>
    </div>
  )
}

export default CardPokemon
