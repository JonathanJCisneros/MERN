import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import DeleteButton from '../components/DeleteButton';

const Details = () => {
    const {_id} = useParams();
    const [job, setJob] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/job/${_id}`)
            .then(res => setJob(res.data))
    }, [_id])

    const redirect = () => navigate('/')

    return (
        <div>
            <h1>Jobs Board</h1>
            {job&&
                <> 
                    <div>
                        <h3>Job Title: {job.title}</h3>
                        <h3>Company: {job.company}</h3>
                        <h3>Salary: ${job.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                        <h3>Remote Working: {job.isRemote === true? "Yes": "No"}</h3>
                        <h3>Applied: Yes</h3>
                    </div>
                    <div>
                        <button className='btn btn-primary' onClick={() => navigate(`/jobs/edit/${job._id}`)}>Edit</button>
                        <span>   </span>
                        <DeleteButton id={job._id} callBack={redirect}/>
                    </div>
                    <br />
                    <button className='btn btn-secondary' onClick={() => navigate(-1)}>Back</button>
                </>}
        </div>
    )
}

export default Details