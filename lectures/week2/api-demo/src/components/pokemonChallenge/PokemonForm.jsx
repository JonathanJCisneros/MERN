import React, {useState} from 'react'

const PokemonForm = (props) => {
    const [pokemonName, setPokemonName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewName(pokemonName)
    }
    return (
        <fieldset>
            <legend>PokemonForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" name='pokemonName' value={pokemonName} onChange={e=>setPokemonName(e.target.value)}/>
                </p>
                <button type='submit'>Search for a Shiny Pokemon</button>
            </form>
        </fieldset>
    )
}

export default PokemonForm