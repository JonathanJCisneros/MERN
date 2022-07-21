import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
    const {id, callBack} = props;

    const deletePerson = (e) => {
        axios.delete(`http://localhost:8000/api/job/${id}`)
            .then(res => callBack())
    }

    return (
        <button type="button" className="btn btn-danger" onClick={deletePerson}>Delete</button>
    )
}

export default DeleteButton