import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PokemonTypes from './PokemonTypes'

const PokemonDetails = ({ details }) => {
  return (
    <div className='poke-details'>
      <Row>
        <Col
          xs={12}
          sm={6}
          md={{ span: 5, offset: 1 }}
          xl={{ span: 4, offset: 2 }}
        >
          <h4>
            <strong>Height: </strong>
            {details.height * 10} cm
          </h4>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={{ span: 5, offset: 1 }}
          xl={{ span: 4, offset: 2 }}
        >
          <h4>
            <strong>Pokedex ID: </strong>
            {details.id}
          </h4>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={6}
          md={{ span: 5, offset: 1 }}
          xl={{ span: 4, offset: 2 }}
        >
          <h4>
            <strong>Weight: </strong>
            {(Math.round(details.weight / 10) * 2.2).toFixed(2)} lbs
          </h4>
        </Col>
        <Col
          xs={12}
          sm={6}
          md={{ span: 5, offset: 1 }}
          xl={{ span: 4, offset: 2 }}
        >
          <h4 className='d-flex mr-2'>
            <strong className='mr-2'>Types: </strong>
            <PokemonTypes types={details.types} />
          </h4>
        </Col>
      </Row>
    </div>
  )
}

export default PokemonDetails
