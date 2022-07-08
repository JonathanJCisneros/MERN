import React, {useState} from 'react'
import Display from './Display'

const Form1 = () => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(18)
    const [password, setPassword] = useState("")

    const handlePassword = (e) => setPassword(e.target.value);
    
    return (
        <fieldset>
            <legend>Form1.jsx</legend>
            <h1>Form</h1>
            <p>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username}/>
            </p>
            <p>
                <label htmlFor="age">Age</label>
                <input type="number" name='age' onChange={(e) => setAge(e.target.value)}/>
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' onChange={handlePassword}/>
            </p>
            
            <Display username={username} age = {age} password={password}/>
        </fieldset>

        
    )
}

export default Form1