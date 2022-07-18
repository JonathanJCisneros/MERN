import React, { useEffect, useState } from 'react'
import axios from 'axios';
    
const Update = (props) => {
    const { _id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${_id}`)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, []);
    
    const updatePerson = person => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/people/${_id}`, person)
            .then(res => console.log("Response: ", res))
    }
    
    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <PersonForm onSubmitProp={updatePerson} initialFirstName={person.firstName} initialLastName={person.lastName}/>
            )}
        </div>
    )
}
    
export default Update;