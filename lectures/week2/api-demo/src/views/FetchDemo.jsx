import React, {useState} from 'react'
import FetchDisplay from '../components/fetchDemo/FetchDisplay'
import axios from 'axios'

const FetchDemo = () => {

    const [pokemon, setPokemon] = useState()

    const fetchPokemonwithThen = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
            .then(response => {
                return response.json()
            })
            .then(jsonResponse => {
                console.log(jsonResponse)
                setPokemon(jsonResponse)
            })
            .catch(error => console.log("...catch" + error))
    }

    const fetchPokemonwithAwait = async() =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/eevee`)
        const jsonResponse = await response.json()
        setPokemon(jsonResponse)
    }

    const fetchPokemonwithAwait2 = async() =>{
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/eev`)
            const jsonResponse = await response.json()
            setPokemon(jsonResponse)
        }
        catch(err){
            setPokemon()
            alert("The pokemon is not available")
        }
    }

    const fetchPokemonwithAxios = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/snorlax`)
        .then(response => setPokemon(response.data))
        .catch(error => console.log(error))
    }

    const fetchPokemonwithAxiosAsync = async() =>{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/snorlax`)
        setPokemon(response.data)
    }

    return (
        <fieldset>
            <legend>FetchDemo.jsx</legend>
            <button onClick={fetchPokemonwithThen}>Fetch with .then</button>
            <span>  |  </span>
            <button onClick={fetchPokemonwithAwait}>Fetch with Await</button>
            <span>  |  </span>
            <button onClick={fetchPokemonwithAwait2}>Fetch with Await2</button>
            <span>  |  </span>
            <button onClick={fetchPokemonwithAxios}>Fetch with Axios</button>
            <span>  |  </span>
            <button onClick={fetchPokemonwithAxiosAsync}>Fetch with Axios Async</button>
            <FetchDisplay pokemon={pokemon}/>
        </fieldset>
    )
}

export default FetchDemo