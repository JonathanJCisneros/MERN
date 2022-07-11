import React from 'react'

const DisplayTodo = (props) => {
    const {newList} = props;
    return (
        <fieldset>
            <legend>DisplayTodo.jsx</legend>
            <ul>
                {
                    newList.map((item, i) => <li key={i} style={{listStyleType: "none"}}>{item.todo}</li>)
                }
            </ul>
        </fieldset>
    )
}

export default DisplayTodo