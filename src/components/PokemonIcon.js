import React from 'react'
import { Image } from 'react-bootstrap'

const PokemonIcon = ({ id }) => {
  const iconUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  return <Image className='img-ico' roundedCircle src={iconUrl} />
}

export default PokemonIcon
