import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const AddPlayer = () => {
    const [name, setName] = useState();
    const [position, setPosition] = useState();
    const [error, setError] = useState({});

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/player`, {name, position, status : "Undecided"})
            .then(res => navigate('/players/list'))
            .catch(err => setError(err.response.data.errors))
    }

    return (
        <div>
            <NavBar/>
            <div style={{padding : "40px", border : "5px solid black"}}>
            <h1><Link to={'/players/list'}>List</Link>   |   <Link to={'/players/addplayer'}>Add Player</Link></h1>
                <form style={{border : "3px solid black", padding : "30px"}} onSubmit={handleSubmit}>
                    <h2>Add Player</h2>
                    <div>
                        <label htmlFor="name">Player Name:     </label>
                        <input type="text" name='name' onChange={(e) => setName(e.target.value)} value={name}/>
                        {error.hasOwnProperty("name")&& <p style={{color : "red", fontWeight : "bold"}}>{error.name.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="position">Preferred Position:     </label>
                        <input type="text" name='position' onChange={(e) => setPosition(e.target.value)} value={position}/>
                        {error.hasOwnProperty("position")&& <p style={{color : "red", fontWeight : "bold"}}>{error.position.message}</p>}
                    </div>

                    <button type='submit'>Add</button>
                </form>
            </div>
            
        </div>
    )
}

export default AddPlayer