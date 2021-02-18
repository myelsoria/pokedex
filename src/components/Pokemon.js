import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Pokemon = ({pokemon}) => {

    const id = pokemon.url.slice(0, -1).split("/").pop()

    return (
        <Link to={`/pokemons/${id}`}>
            <ListGroupItem>
                {pokemon.name}
            </ListGroupItem>
        </Link>             
    )
}

export default Pokemon
