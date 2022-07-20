import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <h2><Link to={'/players/list'}>Manage Players</Link>   | <Link to={'/status/game/1'}>Manage Player Status</Link></h2>
        </div>
    )
}

export default NavBar