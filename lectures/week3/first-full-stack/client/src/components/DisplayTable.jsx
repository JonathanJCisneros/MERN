import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayTable = (props) => {
    const {songList} = props;

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/songs/${id}`)
            .then(res => props.updateList(id))
            .catch(err => console.log(err))
    }
    
    return (
        <fieldset>
            <legend>DisplayTable.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        songList.map((song, i) => {
                            return (
                            <tr key={i}>
                                <td><Link to={`/songs/${song._id}`}>{song.title}</Link></td>
                                <td>{song.artist}</td>
                                <td>{song.rating}</td>
                                <td><Link to={`/songs/${song._id}/edit`}>Edit</Link></td>
                                <td><button onClick={()=> handleDelete(song._id)}>Delete</button></td>
                            </tr>
                            )})
                    }
                </tbody>
            </table>
            
        </fieldset>
    )
}

export default DisplayTable