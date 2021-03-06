import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Update = () => {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [rating, setRating] = useState("") 

    const {_id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs/${_id}`)
            .then(res => {
                setTitle(res.data.title)
                setArtist(res.data.artist)
                setRating(res.data.rating)
            })
            .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/songs/${_id}`, {title, artist, rating})
            .then(res => navigate("/2"))
            .catch(err => console.log(err))
        
    }

    return (
        <fieldset>
            <legend>Update.jsx</legend>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="title">Title  </label>
                    <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="artist">Artist  </label>
                    <input type="text" name='artist' value={artist} onChange={(e) => setArtist(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="rating">Rating  </label>
                    <input type="number" name='rating' value={rating} onChange={(e) => setRating(e.target.value)}/>
                </div>
                <button type='submit'>Create Song</button>
            </form>
        </fieldset>
    )
}

export default Update