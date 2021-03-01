import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'

const PokemonStats = ({ stats, barColor }) => {
  const newStats = []
  stats &&
    stats.forEach((s) => {
      if (s.stat.name !== 'special-attack' && s.stat.name !== 'special-defense')
        newStats.push({ base_stat: s.base_stat, stat: s.stat.name })
    })

  return (
    <ListGroup.Item>
      {newStats.map((s) => (
        <Row key={s.stat}>
          <Col xs={12} sm={3} md={4}>
            <h5 className='text-capitalize'>{s.stat}</h5>
          </Col>
          <Col xs={12} sm={9} md={8}>
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{
                  minWidth: s.base_stat - 40 + '%',
                  background: barColor,
                }}
              >
                {s.base_stat}
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </ListGroup.Item>
  )
}

export default PokemonStats
