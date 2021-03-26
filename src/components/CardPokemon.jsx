import React from 'react'

function CardPokemon ({ id, name, imagen, handleClick }) {
  return (
    <div className='card-pokemon' onClick={() => handleClick({ id })}>
      <img src={imagen} alt={name} />
      <p className='card-pokemon__name'>{name}</p>
    </div>
  )
}

export default CardPokemon
