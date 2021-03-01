import React from 'react'
import { Image } from 'react-bootstrap'

const PokemonTypes = ({ types }) => {
  return (
    <div className='d-inline-flex'>
      {types &&
        types.map((t) => (
          <Image
            className='types-ico mx-1'
            key={t.type.name}
            src={`/types_ico/${t.type.name}.png`}
            alt={t.type.name}
            title={t.type.name}
          />
        ))}
    </div>
  )
}

export default PokemonTypes
