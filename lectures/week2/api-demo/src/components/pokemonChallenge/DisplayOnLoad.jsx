import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DisplayOnLoad = (props) => {
    const {pokemonName} = props;
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(res => {
            console.log(res.data)
            setPokemon(res.data)})
        .catch(err => console.log(err))
    }, [pokemonName])
    return (
        <fieldset>
            <legend>DisplayOnLoad.jsx</legend>
        {pokemon?
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_shiny}/>
        </div>:
        <h3>loading....</h3>
        }
        </fieldset>
    )
}

export default DisplayOnLoad