import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'

const PokemonScreen = ({match}) => {
    const [details, setDetails] = useState({})
    const [pokeStats, setPokeStats] = useState([])
    const [pokeMoves, setPokeMoves] = useState([])

    const url = `https://pokeapi.co/api/v2/pokemon/${match.params.id}`

    useEffect(() => {
        const getPokemonDetails = async () => {
            try {
                const { data } = await axios.get(url)
                setDetails(data)
                const { stats } = data
                setPokeStats(stats)
                const { moves } = data
                setPokeMoves(moves)
            } catch (error) {
                throw new Error('Error in fetching Pokemon details: ',error)
            }
        }
        getPokemonDetails()
    }, [url])

    return (
        <Container>
            {details.name}

        </Container>
    )
}

export default PokemonScreen
