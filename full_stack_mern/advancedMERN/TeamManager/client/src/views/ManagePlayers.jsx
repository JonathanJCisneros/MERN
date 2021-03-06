import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import PlayerList from '../components/PlayerList'

const ManagePlayers = () => {
    return (
        <div>
            <NavBar/>
            <div style={{padding : "40px", border : "5px solid black"}}>
                <h1><Link to={'/players/list'}>List</Link>   |   <Link to={'/players/addplayer'}>Add Player</Link></h1>
                <PlayerList loadType="playerlist"/>
            </div>
        </div>
    )
}

export default ManagePlayers