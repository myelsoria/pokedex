import React, {useState, useEffect} from 'react'
import { ListGroup } from 'react-bootstrap'
import Pokemon from "../components/Pokemon";
import axios from 'axios'

const Pokemons = ({category}) => {
    const [pokemons, setPokemons] = useState([])
    const [pokemonCategory, setpokemonCategory] = useState(category)

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    useEffect(() => {
        const getPokemonData = async () => {
            const { data : { results } } = await axios.get(url)
            setPokemons(results)
        }
        getPokemonData()
    },[url])

    return (
        <ListGroup>
            {pokemons && pokemons.map(p => (
                <Pokemon pokemon={p} />
            ) )}
        </ListGroup>
    )
}

export default Pokemons
