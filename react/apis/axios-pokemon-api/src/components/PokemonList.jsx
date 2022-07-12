import React, {useState} from 'react'
import axios from 'axios'
import PokemonDisplay from './PokemonDisplay'

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([])
    
    const fetchPokemonwithAxiosAsync = async() =>{
        const response = await axios.get(`http://pokeapi.co/api/v2/pokemon/?limit=811`)
        setPokemonList(response.data.results)
    }

    return (
        <div>
            <button onClick={fetchPokemonwithAxiosAsync}>Fetch Pokemon</button>
            <PokemonDisplay List={pokemonList}/>
        </div>
    )
}

export default PokemonList