import React from 'react'
import { Card } from 'react-bootstrap'

const PokemonTypes = ({types}) => {

    return (
        <div>
            {
                types && types.map(t => (
                    <Card.Img 
                        className='types-ico mx-1' 
                        key={t.type.name} 
                        src={`/types_ico/${t.type.name}.png`}
                        alt={t.type.name} 
                        title={t.type.name} 
                    />
                ))
            }
        </div>
    )
}

export default PokemonTypes
