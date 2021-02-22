import React, { useState, useEffect } from 'react'
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap'
import PokemonStats from './PokemonStats'
import PokemonTypes from './PokemonTypes'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PokemonScreen = ({ match }) => {
  const [details, setDetails] = useState({})

  const url = `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${match.params.id}.png`

  useEffect(() => {
    const getPokemonDetails = async () => {
      try {
        const { data } = await axios.get(url)
        setDetails(data)
      } catch (error) {
        throw new Error('Error in fetching Pokemon details: ', error)
      }
    }
    getPokemonDetails()
  }, [url])

  return (
    <Container>
      <Link to='/'>
        <i className='fas fa-angle-left text-secondary'></i>
      </Link>
      <Row>
        <Col
          className='h-100 w-100 mx-auto'
          xs={12}
          sm={10}
          md={8}
          lg={6}
          xl={6}
        >
          <Card>
            <Card.Img variant='top' src={imgUrl} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-between align-items-center'>
                <span className='text-capitalize'>{details.name}</span>
                <PokemonTypes types={details.types} />
              </Card.Title>
              <ListGroup>
                <PokemonStats stats={details.stats} />
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PokemonScreen
