import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateFormUpdate = (props) => {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [rating, setRating] = useState("") 

    const navigate = useNavigate()
    
    const submit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/songs`, {title, artist, rating})
            .then(res => props.updateList(res.data))
            .catch(err => console.log(err))
        
    }

    return (
        <fieldset>
            <legend>CreateForm.jsx</legend>
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

export default CreateFormUpdate