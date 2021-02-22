import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Pokemons from './Pokemons'
import Header from './Header'
import Footer from './Footer'

const PokedexContainer = () => {
  const [searchText, setSearchText] = useState('')
  const searchTextHandler = (data) => {
    setSearchText(data)
  }
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header onSearchTextHandler={searchTextHandler} />
      <Container className='py-3 flex-grow-1'>
        <Pokemons searchText={searchText} />
      </Container>
      <Footer />
    </div>
  )
}

export default PokedexContainer
