import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import DeleteButton from './DeleteButton'

const JobList = () => {
    const [jobList, setJobList] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs`)
            .then(res => setJobList(res.data))
    }, [jobList])

    const updateList = (id) => setJobList(jobList.filter(job => job._id !== id))

    const edit = (id) => navigate(`/jobs/edit/${id}`)

    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>Job Title</th>
                    <th scope='col'>Company</th>
                    <th scope='col'>Salary</th>
                    <th scope='col'>Remote</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {jobList.map((job, i) => {
                    return (<tr key={i}>
                        <td><Link to={`/jobs/${job._id}`}>{job.title}</Link></td>
                        <td>{job.company}</td>
                        <td>${job.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td>{job.isRemote === true? "Yes": "No"}</td>
                        <td>
                            <button className='btn btn-secondary' onClick={()=> edit(job._id)}>Edit</button>
                            <span>   </span>
                            <DeleteButton id={job._id} callBack={()=> updateList(job._id)}/>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default JobList