import React, { useState } from 'react'

const FunctionalStateComponent = () => {
    const [count, setCount] = useState(0);
    const [likes, setLikes] = useState(100);

    const addLikes = () => setLikes(likes + 1);
    return (
        <fieldset>
            <legend>FunctionalStateComponent</legend>
            <p>
                <button onClick={() =>setCount(count + 1)}>Add Count</button>
                <span>  |  </span>
                <button onClick={addLikes}> Add Likes </button>
            </p>
            <h1>Count: {count}</h1>
            <h1>Likes: {likes}</h1>
        </fieldset>
    )
}

export default FunctionalStateComponent