import React, {useState} from 'react'
import Display from './Display';

const Form2 = () => {
    const [username, setUsername] = useState("abc");
    const [age, setAge] = useState(21);
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(username.length >=3 && age > 20){
            console.log({username, age})
            setIsSubmitted(true);
        }
        else{
            alert("Fix your form")
        }
    }

    const formMessage = () => !isSubmitted?"Please fill in the form":"Thank you for submitting!"

    return (
        <fieldset>
            <legend>Form2.jsx</legend>
            <h1>{formMessage()}</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                </p>
                {
                    username.length < 3? <p style={{color: "red"}}>Username should be at least 3 characters</p>:""
                }
                <p>
                    <label htmlFor="age">Age</label>
                    <input type="number" name='age' onChange={(e) => setAge(e.target.value)} value={age}/>
                </p>
                {
                    age < 21? <p style={{color: "red"}}>Age should be at least 21 years old</p>:""
                }
                <button type='submit' disabled={username.length < 3 && age < 21}>Submit</button>

                <Display username={username} age={age} />
            </form>
        </fieldset>
    )
}

export default Form2