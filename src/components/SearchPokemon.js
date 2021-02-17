import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const SearchPokemon = () => {
    const [searchText, setSearchText] = useState('')

    return (
        <Container>
            <Form>
                <Form.Group controlId='searchText'>
                    <Form.Control
                        type='text'
                        placeholder='Search Pokemon...'
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)} >
                    </Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default SearchPokemon