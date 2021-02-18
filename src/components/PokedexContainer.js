import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import SearchPokemon from './SearchPokemon'
import Pokemons from './Pokemons'
import PokemonScreen from './PokemonScreen'

const PokedexContainer = () => {
    const [searchText, setSearchText] = useState('')
    const searchTextHandler = (data) => {
        setSearchText(data)
    }
    return (
        <Container>
            <SearchPokemon onSearchTextHandler={searchTextHandler} />
            <Pokemons searchText={searchText} />
        </Container>            
    )
}

export default PokedexContainer
