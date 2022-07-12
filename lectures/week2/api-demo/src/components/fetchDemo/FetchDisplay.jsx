import React from 'react'

const FetchDisplay = (props) => {
    const {pokemon} = props;
    return (
        <fieldset>
            <legend>FetchDisplay.jsx</legend>
            {
                pokemon?
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt="img" />
                </div>:
                <h1>Fetch a pokemon by clicking on button</h1>
            }
        </fieldset>
    )
}

export default FetchDisplay