import React, {useState} from 'react'

const AddColor = (props) => {
    const [formState, setFormState] = useState({
        color : "",
        size : ""
    })
    const {color, size} = formState;


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
        const newBox = {
            color : color,
            size : size
        }
        props.newBox(newBox)
        setFormState({
            color : "",
            size : ""
        })
    }


    return (
        <fieldset>
            <legend>Add.jsx</legend>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color  </label>
                <input type="text" name="color" onChange={handleInput} value={color}/>
                <br />
                <label htmlFor="size">Size (in pixels)  </label>
                <input type="number" name='size' onChange={handleInput} value={size}/>
                <br />
                <button type='submit'>Add</button>
            </form>
        </fieldset>
    )
}

export default AddColor