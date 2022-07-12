import React from 'react'
import FetchDisplay from '../components/fetchDemo/FetchDisplay'

const FetchDemo = () => {
    const fetchPokemonwithThen = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
            .then(response => {
                return response.json()
            })
            .then(jsonResponse => {
                console.log(jsonResponse)
            })
            .catch(error => console.log(error))
    }
    return (
        <fieldset>
            <legend>FetchDemo.jsx</legend>
            <button onClick={fetchPokemonwithThen}>Fetch with .then</button>


            <FetchDisplay/>
        </fieldset>
    )
}

export default FetchDemo