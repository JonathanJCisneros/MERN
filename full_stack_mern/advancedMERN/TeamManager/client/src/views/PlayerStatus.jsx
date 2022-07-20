import React from 'react'
import NavBar from '../components/NavBar'
import PlayerList from '../components/PlayerList'

const PlayerStatus = () => {
    return (
        <div>
            <NavBar/>
            <div style={{padding : "40px", border : "5px solid black"}}>
                <h1>Player Status - Game 1</h1>

                <h2 style={{textAlign : "center"}}>Game 1  |  Game 2  |  Game 3</h2>

                <PlayerList/>
            </div>
        </div>
    )
}

export default PlayerStatus