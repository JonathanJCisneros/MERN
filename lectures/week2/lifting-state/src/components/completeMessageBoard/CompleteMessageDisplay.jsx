import React from 'react'

// 1. Create a form
// 2. input --> state

const CompleteMessageDisplay = (props) => {

    const handleDelete = (idxToDelete) => {
        const filteredList = props.newList.filter((element, i) => {
            return i !== idxToDelete
        })
        props.onListUpdate(filteredList)
    }

    const handleImportant = (e, idx) => {
        const arrayCopy = [...props.newList]
        arrayCopy[idx].isImportant = e.target.checked
        props.onListUpdate(arrayCopy)
    }

    return (
        <fieldset>
            <legend>CompleteMessageDisplay.jsx</legend>
            
                {
                    props.newList.map((message, i) => {
                        return (
                        <pre key={i} style={message.isImportant? {color: "red"}: {color: "blue"}}>To {message.receiver} : {message.content}
                        <input type="checkbox" name="isImportant" checked={message.isImportant} onChange={e=>handleImportant(e, i)}/>
                        <button onClick={(e) => handleDelete(i)}>Delete</button>
                        </pre>
                        )})                
                }

        </fieldset>
    )
}

export default CompleteMessageDisplay