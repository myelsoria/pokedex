import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

const Pokemon = ({pokemon}) => {
    return (
        <ListGroupItem>
            {pokemon.name}
        </ListGroupItem>
    )
}

export default Pokemon
