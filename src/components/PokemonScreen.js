import React, { useState, useEffect } from 'react'
import { Card, Row, Col, ListGroup } from 'react-bootstrap'
import PokemonDetails from './PokemonDetails'
import PokemonStats from './PokemonStats'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useColor } from 'color-thief-react'

const PokemonScreen = ({ match }) => {
  const [details, setDetails] = useState({})

  const url = `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${match.params.id}.png`
  const crossOrigin = 'anonymous'
  const quality = 10
  const { data } = useColor(imgUrl, 'hex', {
    crossOrigin,
    quality,
  })
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
    <div
      className='pokemonScreen container-bg'
      style={{ backgroundColor: data }}
    >
      <div className='back-btn'>
        <Link to='/'>
          <i className='fas fa-angle-left'></i>
        </Link>
      </div>
      <Card className='bg-transparent mx-auto border-0'>
        <Row>
          <Col className='mx-auto card-container' sm={12} md={9} lg={6}>
            <Card.Img
              className='mt-5'
              variant='top'
              src={imgUrl}
              fluid='true'
            />
            <span className='poke-name'>{details.name}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={11} sm={10} md={10} lg={8} className='mx-auto'>
            <Card.Body>
              <PokemonDetails details={details} />
              <ListGroup className='pt-3'>
                <PokemonStats stats={details.stats} barColor={data} />
              </ListGroup>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default PokemonScreen
