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
    <div>
      <Container>
        <Header onSearchTextHandler={searchTextHandler} />
        <Pokemons searchText={searchText} />
      </Container>
      <Footer />
    </div>
  )
}

export default PokedexContainer
