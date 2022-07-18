import React, {useState} from 'react';
import axios from 'axios'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = () => {
    const [people, setPeople] = useState([]);

    const createPerson = (person) => {
        axios.post(`http://localhost:8000/api/people`, person)
            .then(res => setPeople([...people, res.data]));
    }

    return (
        <div>
            <h1>Name Dashboard</h1>
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
            <hr/>
            <PersonList people={people}/>
        </div>
    )
}

export default Main