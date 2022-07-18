import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DisplayTable = () => {
    const [songList, setSongList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs`)
            .then(res => setSongList(res.data))
            .catch(err => console.log(err))
    })
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
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.rating}</td>
                            </tr>
                            )})
                    }
                </tbody>
            </table>
            
        </fieldset>
    )
}

export default DisplayTable