import React, {useState, useEffect} from 'react'
import { ListGroup } from 'react-bootstrap'
import Pokemon from "../components/Pokemon";
import axios from 'axios'

const Pokemons = ({searchText}) => {
    const [pokemons, setPokemons] = useState([])
    const [newPokemonList, setNewPokemonList] = useState()

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    
    useEffect(() => {
        const getPokemonData = async () => {
            const { data : { results } } = await axios.get(url)
            setPokemons(results)
        }
        getPokemonData()
    },[url])

    useEffect(() => {
        let newPokemonList = []
        pokemons.forEach(p => {
            if(p.name.toLowerCase().includes(searchText.toLowerCase()) === true)
               newPokemonList.push(p)
        })
        setNewPokemonList(newPokemonList)
    }, [searchText])

    return (
        <ListGroup>
                {searchText.length === 0 && newPokemonList && newPokemonList.length === 0 ?
                    (pokemons && pokemons.map((p,index) => (
                        <Pokemon pokemon={p} key={index} />
                    ))) :
                    (newPokemonList && newPokemonList.map((p,index) => (
                        <Pokemon pokemon={p} key={index} />
                    )))
                }
        </ListGroup>
    )
}

export default Pokemons
