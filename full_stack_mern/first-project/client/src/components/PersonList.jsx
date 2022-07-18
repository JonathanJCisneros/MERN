import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const PersonList = (props) => {
    const {people, removeFromDom} = props;

    const deletePerson = (id) => {
        axios.delete(`http://localhost:8000/api/people/${id}`)
            .then(res => removeFromDom(id))
            .catch(err => console.error(err));
    }

    return (
        <div>
            {people.map( (person, i) =>
                <p key={i}>
                    <Link to={`/${person._id}`}>{person.lastName}, {person.firstName}</Link>
                    |
                    <button onClick={(e)=>deletePerson(person._id)}>Delete</button>
                </p>
            )}
        </div>
    )
}

export default PersonList