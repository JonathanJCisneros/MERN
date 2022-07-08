import React, { useState } from  'react';
import '../App.css'
    
const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <div className='container'>
            <form className='form'>
                <div className='input'>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={firstName}/>
                </div>
                <div className='input'>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } value={lastName}/>
                </div>
                <div className='input'>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/>
                </div>
                <div className='input'>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password}/>
                </div>
                <div className='input'>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } value={confirmPassword}/>
                </div>
            </form>

            <div>
                <h1>Show Data</h1>
                <h3>First Name: {firstName}</h3>
                <h3>Last Name: {lastName}</h3>
                <h3>Email: {email}</h3>
                <h3>Password: {password}</h3>
                <h3>Confirm Password: {confirmPassword}</h3>
            </div>
        </div>
    );
};
    
export default HookForm;
