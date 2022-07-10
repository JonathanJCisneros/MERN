import React, {useState} from 'react'

const AddColor = (props) => {
    const [formState, setFormState] = useState({
        color : ""
    })

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
        props.newColor(color);
        setFormState({
            color: ""
        })
    }
    const {color} = formState;

    return (
        <fieldset>
            <legend>Add.jsx</legend>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color </label>
                <input type="text" name="color" onChange={handleInput} value={color}/>
                <button type='submit'>Add</button>
            </form>
        </fieldset>
    )
}

export default AddColor