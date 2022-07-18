import React, {useState} from 'react'

const PersonForm = (props) => {
    const{initialFirstName, initialLastName, onSubmitProp} = props;
    const [firstName, setFirstName] = useState(initialFirstName)
    const [lastName, setLastName] = useState(initialLastName)

    const submit = (e) => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});
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