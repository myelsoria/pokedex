import React, { useState, useEffect } from 'react'
import { Form, Col, InputGroup } from 'react-bootstrap'

const SearchPokemon = ({ onSearchTextHandler }) => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    onSearchTextHandler(searchText)
  }, [searchText])

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group controlId='searchText'>
        <Form.Control
          type='text'
          placeholder='Search Pokemon...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Form.Group>
    </Form>
  )
}

export default SearchPokemon
