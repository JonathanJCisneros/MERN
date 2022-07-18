import React, {useEffect, useState} from 'react';
import axios from 'axios'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people`)
            .then(res => {
                setPeople(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = id => {
        setPeople(people.filter(person => person._id !== id));
    }

    const createPerson = (person) => {
        axios.post(`http://localhost:8000/api/people`, person)
            .then(res => setPeople([...people, res.data]));
    }

    return (
        <div>
            <h1>Name Dashboard</h1>
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
            <hr/>
            {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main