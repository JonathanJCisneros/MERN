import React from 'react'

const DisplayTodo = (props) => {
    const {newList, onListUpdate} = props;

    const handleDelete = (id) => {
        const filteredList = newList.filter((element, i) => {
            return i !== id
        })
        onListUpdate(filteredList)
    }

    const handleComplete = (e, idx) => {
        const newCopy = [...newList]
        newCopy[idx].complete = e.target.checked
        onListUpdate(newCopy)
    }

    return (
        <fieldset>
            <legend>DisplayTodo.jsx</legend>
            <ul>
                {
                    newList.map((item, i) => {
                    return (
                    <pre key={i} style={item.complete? {textDecoration: "line-through"}:{textDecoration: "none"} }>{item.todo}
                    <input type="checkbox" name="complete" checked={item.complete} onChange={e=>handleComplete(e, i)}/>
                    <button onClick={(e) => handleDelete(i)}>Delete</button>
                    </pre>)})
                }
            </ul>
        </fieldset>
    )
}

export default DisplayTodo