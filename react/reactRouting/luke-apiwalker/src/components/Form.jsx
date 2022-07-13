import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Form = () => {
    const [type, setType] = useState('')
    const [id, setId] = useState('')
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        navigate(`/${type}/${id}`)
        setType('')
        setId('')
    }



    return (
        <form onSubmit={submit}>
            <label htmlFor="type">Type: </label>
            <select name="type" id="type" onChange={e => setType(e.target.value)} value={type}>
                <option selected>Choose...</option>
                <option value="people" selected>People</option>
                <option value="planets" selected>Planets</option>
                <option value="starships" selected>Starships</option>
            </select>
            <label htmlFor="id">ID: </label>
            <input type="number" name='id' onChange={e => setId(e.target.value)} value={id}/>
            <button type='submit'>Search</button>
        </form>
    )
}

export default Form