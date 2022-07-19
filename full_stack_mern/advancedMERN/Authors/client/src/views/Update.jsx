import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const Update = () => {
    const {_id} = useParams();
    const [author, setAuthor] = useState();
    const [error, setError] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${_id}`)
            .then(res => setAuthor(res.data))
    }, [_id])

    const updateAuthor = (author) => {
        axios.put(`http://localhost:8000/api/author/${_id}`, author)
            .then(res => navigate(`/`))
            .catch(err => setError(err.response.data.errors.name.message))
    }

    return (
        <div>
            <h1>Update Author</h1>
            <Link to={'/'}>Home</Link>
            {author&& <AuthorForm initialValue={author.name} operator="Update" onSubmitProp={updateAuthor} error={error}/>}
        </div>
    )
}

export default Update