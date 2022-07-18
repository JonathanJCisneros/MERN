import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import DeleteButton from './DeleteButton';

const PersonList = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => setPeople(res.data));
    }, [])
    
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId))
    }

    return (
        <div>
            {people.map( (person, i) =>
                <p key={i}>
                    <Link to={`/${person._id}`}>{person.lastName}, {person.firstName}</Link>
                    <span>   |   </span>
                    <DeleteButton id={person._id} successCallback={()=>removeFromDom(person._id)}/>
                </p>
            )}
        </div>
    )
}

export default PersonList