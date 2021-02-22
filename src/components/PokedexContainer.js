import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Pokemons from './Pokemons'
import Header from './Header'

const PokedexContainer = () => {
    const [searchText, setSearchText] = useState('')
    const searchTextHandler = (data) => {
        setSearchText(data)
    }
    return (
        <Container>
            <Header onSearchTextHandler={searchTextHandler} />
            <Pokemons searchText={searchText} />
        </Container>            
    )
}

export default PokedexContainer
