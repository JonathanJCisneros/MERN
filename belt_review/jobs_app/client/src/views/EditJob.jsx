import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import DeleteButton from '../components/DeleteButton'

const EditJob = () => {
    const {_id} = useParams();
    const [job, setJob] = useState()
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/job/${_id}`)
            .then(res => setJob(res.data))
    }, [_id])

    const updateJob = (jobDetails) => {
        axios.put(`http://localhost:8000/api/job/${_id}`, jobDetails)
            .then(res => redirect())
            .catch(err => setErrors(err.response.data.errors))
    }

    const redirect = () => navigate('/')

    return (
        <div>
            <h1>Job Board</h1>
            <h2>Edit Job</h2>
            {job&& 
            <div>
                <Form initialTitle={job.title} initialCompany={job.company} initialSalary={job.salary} initialIsRemote={job.isRemote} operator="Update Job" onSubmitProp={updateJob} errors={errors}/>
                <DeleteButton id={job._id} callback={redirect}/>
            </div>
            }
        </div>
    )
}

export default EditJob