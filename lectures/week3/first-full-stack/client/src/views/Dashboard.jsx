import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DisplayTable from '../components/DisplayTable'

const Dashboard = () => {
    const [songList, setSongList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs`)
            .then(res => setSongList(res.data))
            .catch(err => console.log(err))
    }, [])

    const removeFromList = (id) => setSongList(songList.filter((song) => song._id !== id))

    return (
        <fieldset>
            <legend>Dashboard. jsx</legend>
            <h1>Dashboard</h1>
            {songList? <DisplayTable songList={songList} updateList={removeFromList}/>: <h1>No songs right now...</h1>}
        </fieldset>
    )
}

export default Dashboard