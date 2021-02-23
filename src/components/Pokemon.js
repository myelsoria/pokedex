import React from 'react'
import { Link } from 'react-router-dom'
import PokemonIcon from './PokemonIcon'

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url.slice(0, -1).split('/').pop()

  return (
        <Link to={`/pokemons/${id}`} className='my-1'>
            <PokemonIcon id={id} />
            <div className='icon-text'><h6>{pokemon.name}</h6></div>
        </Link>       
  )
}

export default Pokemon
