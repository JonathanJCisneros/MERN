import React, { useState } from  'react';
import '../App.css'
    
const MoreForms = (props) => {
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
                {
                    (firstName.length === 0)? "":
                    (firstName.length < 2)?
                        <p style={{color: "red"}}>First Name must be at least 2 characters long</p>:"" 
                }
                <div className='input'>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } value={lastName}/>
                </div>
                {
                    (lastName.length === 0)? "":
                    (lastName.length < 2)?
                        <p style={{color: "red"}}>Last Name must be at least 2 characters long</p>:"" 
                }
                <div className='input'>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/>
                </div>
                {
                    (email.length === 0)? "":
                    (email.length < 5)?
                        <p style={{color: "red"}}>Email must be at least 5 characters long</p>:"" 
                }
                <div className='input'>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password}/>
                </div>
                {
                    (password.length === 0)? "":
                    (password.length < 8)?
                        <p style={{color: "red"}}>Password must be at least 8 characters long</p>:"" 
                }
                <div className='input'>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } value={confirmPassword}/>
                </div>
                {
                    (confirmPassword.length === 0)? "":
                    (confirmPassword.length != password)?
                        <p style={{color: "red"}}>Must match Password</p>:"" 
                }
            </form>
        </div>
    );
};
    
export default MoreForms;
