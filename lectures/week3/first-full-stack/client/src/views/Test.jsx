import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Test = () => {
    const [info, setInfo] = useState("loading...")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/test`)
            .then(res => setInfo(res.data))
            .catch(err => console.log(err))
    })
    return (
        <fieldset>
            <legend>Test.jsx</legend>
            {info? <h1>{info.status}</h1>: <h1>Loading...</h1>}
        </fieldset>
    )
}

export default Test