import React from 'react'

const PokemonDisplay = (props) => {
    const {List} = props;

    return (
        <div>
            {List.map((pokemon, i) => <li key={i}>{pokemon.name}</li>)}
        </div>
    )
}

export default PokemonDisplay