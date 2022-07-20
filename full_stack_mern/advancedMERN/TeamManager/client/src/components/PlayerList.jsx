import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const PlayerList = (props) => {
    const [playerList, setPlayerList] = useState([])
    const {loadType} = props;


    useEffect(() => {
        axios.get(`http://localhost:8000/api/players`)
            .then(res => setPlayerList(res.data))
    }, [playerList])

    const updateStatus = (id, newStatus) => {
        axios.put(`http://localhost:8000/api/player/${id}`, newStatus)
            .then(res => setPlayerList([...playerList, res.data]))
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/player/${id}`)
            .then(res => updatedList(id))
    }

    const updatedList = (id) => setPlayerList(playerList.filter((player) => player._id !== id))

    return (
        <div style={{border : "3px solid black"}}>
            <table style={{width : "100%"}}>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        {loadType === "playerlist"?
                        <th>Preferred Position</th>: ""
                        }
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList.map((player, i) => {
                        return (<tr key={i}>
                            <td>{player.name}</td>
                            {loadType === "playerlist"?
                                <>  
                                    <td>{player.position}</td>
                                    <td><button onClick={() => handleDelete(player._id)}>Delete</button></td>
                                </>:
                                    <td>
                                        <button style={{ backgroundColor : player.status === "Playing"? "green": ""}} onClick={() => updateStatus(player._id, {status : "Playing"})}>Playing</button>
                                        <button style={{ backgroundColor : player.status === "Not Playing"? "red": ""}} onClick={() => updateStatus(player._id, {status : "Not Playing"})}>Not Playing</button>
                                        <button style={{ backgroundColor : player.status === "Undecided"? "yellow": ""}} onClick={() => updateStatus(player._id, {status : "Undecided"})}>Undecided</button></td>
                            }
                        </tr>)})
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList