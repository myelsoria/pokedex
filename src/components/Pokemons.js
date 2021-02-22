import React, { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import Pokemon from '../components/Pokemon'
import axios from 'axios'

const Pokemons = ({ searchText }) => {
  const [originalPokemons, setOriginalPokemons] = useState([])
  const [pokemons, setPokemons] = useState([])

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  useEffect(() => {
    const getPokemonData = async () => {
      const {
        data: { results },
      } = await axios.get(url)
      setOriginalPokemons(results)
      setPokemons(results)
    }
    getPokemonData()
  }, [url])

  useEffect(() => {
    if (searchText.length > 0) {
      setPokemons(
        originalPokemons.filter((pokemon) => pokemon.name.includes(searchText))
      )
    } else {
      setPokemons(originalPokemons)
    }
  }, [searchText])

  return (
    <ListGroup>
      {pokemons.length ? (
        pokemons.map((pokemon, index) => (
          <Pokemon pokemon={pokemon} key={index} />
        ))
      ) : (
        <p>Not Found</p>
      )}
    </ListGroup>
  )
}

export default Pokemons
