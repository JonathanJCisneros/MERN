import React, {useState} from 'react'

const Form3 = () => {
    const [username, setUsername] = useState();
    const [age, setAge] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    
    const [usernameError, setUsernameError] = useState(true)
    const [ageError, setAgeError] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        !usernameError || !ageError? console.log(`Welcome ${username}, you are ${age} years old`) && setIsSubmitted(true): alert("Fix the form")
    }

    const handleUsername = (e) => {
        const valToUpdate = e.target.value
        setUsername(e.target.value)
        valToUpdate.length = ""? setUsernameError(""):valToUpdate.length < 3?setUsernameError("Username should be at least 3 characters"):setUsernameError("");
    }

    const handleAge = (e) => {
        const valToUpdate = e.target.value
        setAge(e.target.value)
        valToUpdate = ""? setAgeError(""):valToUpdate < 21? setAgeError("Should be at least 21 years of age"):setAgeError("")
    }

    

    return (
        <fieldset>
            <legend>Form3.jsx</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={handleUsername} value={username}/>
                </p>
                <p style={{color: "red"}}>{usernameError}</p>
                <p>
                    <label htmlFor="age">Age</label>
                    <input type="number" name='age' onChange={handleAge} value={age}/>
                </p>
                <p style={{color: "red"}}>{ageError}</p>
                <button type='submit'>Submit</button>
            </form>
        </fieldset>
    )
}

export default Form3