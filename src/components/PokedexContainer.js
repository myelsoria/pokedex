import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import SearchPokemon from './SearchPokemon'
import Pokemons from './Pokemons'

const PokedexContainer = () => {
    const [searchText, setSearchText] = useState('')
    const searchTextHandler = (data) => {
        setSearchText(data)
    }
    return (
        <Container>
            <SearchPokemon onSearchTextHandler={searchTextHandler} />
            <Pokemons searchText={searchText} category />
        </Container>
    )
}

export default PokedexContainer
