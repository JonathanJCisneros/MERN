import React, {useState} from 'react'

const CombineForm = () => {
    const [formState, setFormState] = useState({
        username : "",
        age : ""
    })

    const [formError, setFormError] = useState({
        username : true,
        age : true
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInput = (e) => {
        const keyToUpdate = e.target.name
        const valToUpdate = e.target.value
        setFormState({
            ...formState,
            [keyToUpdate] : valToUpdate
        })

        const errors = {...formError}

        switch(keyToUpdate){
            case 'username':
                valToUpdate.length < 3?
                    errors.username = "Username must be at least 3 characters long":errors.username = ""
            break;
            case 'age':
                valToUpdate < 21?
                    errors.age = "Must be at least 21 years old": errors.age = ""
        }
        setFormError(errors)
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        !formError.username || !formError.age? console.log(`Welcome ${username}, you are ${age} years old`) && setIsSubmitted(true): alert("Fix the form")
    }

    const {username, age} = formState;
    
    return (
        <fieldset>
            <legend>ConbineForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={handleInput} value={username}/>
                </p>
                <p style={{color: "red"}}>{formError.username}</p>
                <p>
                    <label htmlFor="age">Age</label>
                    <input type="number" name='age' onChange={handleInput} value={age}/>
                </p>
                <p style={{color: "red"}}>{formError.age}</p>
                <button type='submit' disabled={formError.username || formError.age}>Submit</button>
            </form>
        </fieldset>
    )
}

export default CombineForm