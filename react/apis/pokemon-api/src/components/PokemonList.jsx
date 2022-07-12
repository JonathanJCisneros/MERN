import React, {useState} from 'react'
import PokemonDisplay from './PokemonDisplay'

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([])
    
    const fetchPokemonwithAwait = async() =>{
        const response = await fetch(`http://pokeapi.co/api/v2/pokemon/?limit=811`)
        const jsonResponse = await response.json()
        setPokemonList(jsonResponse.results)
    }

    return (
        <div>
            <button onClick={fetchPokemonwithAwait}>Fetch Pokemon</button>
            <PokemonDisplay List={pokemonList}/>
        </div>
    )
}

export default PokemonList