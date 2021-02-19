import React from 'react'
import { ListGroup, Row, Col, ProgressBar } from 'react-bootstrap'

const PokemonStats = ({stats}) => {

    const newStats  = []
    stats && stats.forEach(s => {
        if (s.stat.name !== 'special-attack' && s.stat.name !== 'special-defense')  
            newStats.push({base_stat: s.base_stat, stat: s.stat.name})
    });

    return (
        <ListGroup.Item>
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
        </ListGroup.Item>
    )
}

export default PokemonStats
