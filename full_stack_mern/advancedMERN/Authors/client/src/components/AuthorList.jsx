import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const AuthorList = () => {
    const [authorList, setAuthorList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthorList(res.data))
    }, [])

    const edit = (id) => navigate(`/edit/${id}`)

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => removeFromDom(id))
    }

    const removeFromDom = (id) => setAuthorList(authorList.filter(author => author._id !== id))

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authorList.map((author, i) =>
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td><button onClick={e => edit(author._id)}>Edit</button>  |  <button onClick={e => deleteAuthor(author._id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    )
}

export default AuthorList