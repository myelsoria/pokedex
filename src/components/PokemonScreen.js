import React, {useState, useEffect} from 'react'
import { Container, Card, Row, Col, ProgressBar } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PokemonScreen = ({match, location}) => {
    const [details, setDetails] = useState({})

    const url = `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${match.params.id}.png`
    
    useEffect(() => {
        const getPokemonDetails = async () => {
            try {
                const { data } = await axios.get(url)
                setDetails(data)
            } catch (error) {
                throw new Error('Error in fetching Pokemon details: ',error)
            }
        }
        getPokemonDetails()
    }, [url])

    const newStats  = []
    details.stats && details.stats.forEach(s => {
        if (s.stat.name !== 'special-attack' && s.stat.name !== 'special-defense')  
            newStats.push({base_stat: s.base_stat, stat: s.stat.name})
    });

    return (
        <Container>
            <Link to='/'><i className='fas fa-angle-left text-secondary'></i></Link>
            <Row>
                <Col className='h-100 w-100 mx-auto' sm={12} md={9} lg={9}>
                    <Card >
                        <Card.Img variant="top" src={imgUrl} />
                        <Card.Body>
                            <Card.Title className='text-capitalize'>
                                {details.name}
                            </Card.Title>
                            {
                                newStats.map(s => (
                                    <Row key={s.stat}>
                                        <Col sm={12} md={3}><span className='text-capitalize'>{s.stat}</span></Col>
                                        <Col sm={12} md={9}>
                                            <ProgressBar now={s.base_stat} label={s.base_stat} max={130} variant="info" />
                                        </Col>
                                    </Row>
                                ))
                            }
                        </Card.Body>
                    </Card>                   
                </Col>
            </Row>
        </Container>
    )
}

export default PokemonScreen
