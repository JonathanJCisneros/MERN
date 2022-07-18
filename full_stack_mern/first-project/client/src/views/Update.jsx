import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm'
import { useParams, useNavigate } from 'react-router-dom';
    
const Update = () => {
    const { _id } = useParams();
    const [person, setPerson] = useState();

    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/person/${_id}`)
            .then(res => {
                setPerson(res.data);
            })
    }, []);
    
    const updatePerson = person => {
        axios.put(`http://localhost:8000/api/person/${_id}`, person)
            .then(res => navigate('/people'))
    }
    
    return (
        <div>
            <h1>Update a Person</h1>
            {person&& <PersonForm onSubmitProp={updatePerson} initialFirstName={person.firstName} initialLastName={person.lastName}/>}
        </div>
    )
}
    
export default Update;