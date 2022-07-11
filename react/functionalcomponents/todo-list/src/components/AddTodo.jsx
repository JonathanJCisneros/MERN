import React, {useState} from 'react'

const AddTodo = (props) => {
    const [formState, setFormState] = useState({
        todo : "",
        complete : false
    })
    const {todo} = formState;

    const handleInput = (e) => {
        const keyToUpdate = e.target.name
        const valToUpdate = e.target.value
        setFormState({
            ...formState,
            [keyToUpdate] : valToUpdate
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            todo : todo,
            complete : false
        }
        props.newTodo(newTodo)
        setFormState({
            todo: ""
        })
    }

    return (
        <fieldset>
            <legend>AddTodo.jsx</legend>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">Add Todo:  </label>
                <input type="text" name="todo" onChange={handleInput} value={todo}/>
                <br />
                <button type='submit'>Add</button>
            </form>
        </fieldset>
    )
}

export default AddTodo