import React, {useState} from 'react'
import DisplayOnLoad from '../components/pokemonChallenge/DisplayOnLoad'
import PokemonForm from '../components/pokemonChallenge/PokemonForm'

const PokemonChallenge = () => {
    const [pokemonName, setPokemonName] = useState("venusaur")

    const receivePokemonName = (newName) => setPokemonName(newName)
    
    return (
        <fieldset>
            <legend>PokemonChallenge</legend>
            <div>
                <PokemonForm onNewName={receivePokemonName} />
                <DisplayOnLoad pokemonName={pokemonName}/>
            </div>
        </fieldset>
    )
}

export default PokemonChallenge