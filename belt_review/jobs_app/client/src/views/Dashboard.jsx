import React from 'react'
import { Link } from 'react-router-dom'
import JobList from '../components/JobList'

const Dashboard = () => {
    return (
        <div>
            <h1>Jobs Board</h1>
            <h4><Link to={'/jobs/new'}>Create new job</Link></h4>
            <JobList/>
        </div>
    )
}

export default Dashboard