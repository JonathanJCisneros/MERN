import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'

const NewJob = () => {
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const addJob = (jobDetails) => {
        axios.post(`http://localhost:8000/api/job`, jobDetails)
            .then(res => navigate('/'))
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div>
            <h1>Jobs Board</h1>
            <h2>Add a Job:</h2>
            <Form initalTitle="" initialCompany="" initialSalary="" initialIsRemote={true} operator="Add Job" onSubmitProp={addJob} errors={errors}/>
        </div>
    )
}

export default NewJob