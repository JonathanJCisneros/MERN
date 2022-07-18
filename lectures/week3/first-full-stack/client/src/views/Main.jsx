import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CreateFormUpdate from '../components/CreateFormUpdate'
import DisplayTable from '../components/DisplayTable'

const Main = () => {
    const [songList, setSongList] = useState([])
    const [refresh, setRefresh] = useState(true)

    const refreshList = () => setRefresh(!refresh)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/songs`)
            .then(res => setSongList(res.data))
            .catch(err => console.log(err))
    }, [refresh])

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            <CreateFormUpdate updateList={refreshList}/>
            {songList? <DisplayTable songList={songList}/>: <h1>No songs right now...</h1>}
        </fieldset>
    )
}

export default Main