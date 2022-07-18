import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'

const Detail = () => {
    const [person, setPerson] = useState({});
    const {_id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/person/${_id}`)
            .then(res => setPerson(res.data))
            .catch(err => console.error(err))
    }, []);

    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <p><Link to={`/people/${person._id}/edit`}>Edit</Link></p>
        </div>
    )
}

export default Detail