import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

const SearchPokemon = ({ onSearchTextHandler }) => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    onSearchTextHandler(searchText)
  }, [searchText])

  return (
    <Form>
      <Form.Group controlId='searchText'>
        <Form.Control
          type='text'
          placeholder='Search Pokemon...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></Form.Control>
      </Form.Group>
    </Form>
  )
}

export default SearchPokemon
