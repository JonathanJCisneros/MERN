import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <h2><Link>Manage Players</Link>   |   <Link>Manage Player Status</Link></h2>
        </div>
    )
}

export default NavBar