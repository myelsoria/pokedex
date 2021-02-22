import React from 'react'
import { Container } from 'react-bootstrap'
import SearchPokemon from './SearchPokemon'

const Header = ({ onSearchTextHandler }) => {
  return (
    <div className='header'>
      <Container className='my-5'>
        <SearchPokemon onSearchTextHandler={onSearchTextHandler} />
      </Container>
    </div>
  )
}

export default Header