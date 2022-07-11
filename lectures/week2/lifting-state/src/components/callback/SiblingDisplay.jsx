import React from 'react'

const SiblingDisplay = (props) => {
    const {count} = props;
    return (
        <fieldset style={{backgroundColor: "darkseagreen"}}>
            <legend>SiblingDisplay.jsx</legend>
            <h1>Count in Display: {count}</h1>
        </fieldset>
    )
}

export default SiblingDisplay