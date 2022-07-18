import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Details = () => {
    const [song, setSong] = useState()
    const {_id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs/${_id}`)
            .then(res => setSong(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <fieldset>
            <legend>Details.jsx</legend>
            {song? 
                <div>
                    <h1>Title: {song.title}</h1>
                    <h3>Artist: {song.artist}</h3>
                    <p>Rating: {song.rating}</p>
                </div>: 
                <h1>Still Loading...</h1>
            }
        </fieldset>
    )
}

export default Details