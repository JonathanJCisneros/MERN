import React from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'
import { useState } from 'react'

const NewAuthor = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const createAuthor = (author) => {
        axios.post(`http://localhost:8000/api/author`, author)
            .then(res => navigate('/'))
            .catch(err => setError(err.response.data.errors.name.message))
    }

    return (
        <div>
            <h1>Add New Author</h1>
            <Link to={'/'}>Home</Link>
            <AuthorForm initialValue="" operator="Add Author" onSubmitProp={createAuthor} error={error}/>
        </div>
    )
}

export default NewAuthor