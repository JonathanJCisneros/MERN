import React from 'react'
import {Link} from 'react-router-dom'
import AuthorList from '../components/AuthorList'

const Dashboard = () => {
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/new'}>Add An Author</Link>
            <AuthorList/>
        </div>
    )
}

export default Dashboard