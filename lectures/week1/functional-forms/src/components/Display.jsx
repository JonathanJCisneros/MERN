import React from 'react'

const Display = (props) => {
    const {username, age, password} = props;
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            <div>
                <h2>Username: {username}</h2>
                <h2>Age: {age}</h2>
                <h2>Password: {password}</h2>
            </div>  
        </fieldset>
    )
}

export default Display