import React, {useState} from 'react'
import axios from 'axios'

const PersonForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/people`, {firstName, lastName})
            .then(res => console.log("Response: ", res))
            .catch(err => console.log("There was an Error: ", err))
    }

    return (
        <form onSubmit={submit}>
            <p>
                <label htmlFor="firstName">First Name </label>
                <input type="text" name="firstName" id="firstName" onChange={e => setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label htmlFor="lastName">Last Name </label>
                <input type="text" name="lastName" id="lastName" onChange={e => setLastName(e.target.value)} value={lastName}/>
            </p>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default PersonForm