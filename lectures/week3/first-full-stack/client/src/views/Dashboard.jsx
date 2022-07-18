import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DisplayTable from '../components/DisplayTable'

const Dashboard = () => {
    const [songList, setSongList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs`)
            .then(res => setSongList(res.data))
            .catch(err => console.log(err))
    })

    return (
        <fieldset>
            <legend>Dashboard. jsx</legend>
            <h1>Dashboard</h1>
            {songList? <DisplayTable songList={songList}/>: <h1>No songs right now...</h1>}
        </fieldset>
    )
}

export default Dashboard