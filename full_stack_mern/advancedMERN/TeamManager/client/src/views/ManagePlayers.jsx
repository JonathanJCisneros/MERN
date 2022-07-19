import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const ManagePlayers = () => {
    return (
        <div>
            <NavBar/>
            <h1><Link to={'/players/list'}>List</Link>   |   <Link to={'/players/addplayer'}>Add Player</Link></h1>
        </div>
    )
}

export default ManagePlayers