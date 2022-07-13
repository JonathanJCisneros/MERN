import React from 'react'
import {useNavigate} from 'react-router-dom'

// if it rediects to error page, show a button to go back


const ErrorPage = () => {
    const navigate = useNavigate()

    const toHome = () => navigate("/home");

    const goBack = () => navigate(-1);
    
    return (
        <fieldset>
            <legend>ErrorPage.jsx</legend>
            <button onClick={toHome}>Go Home</button>
            <button onClick={goBack}>Go Back</button>
        </fieldset>
    )
}

export default ErrorPage