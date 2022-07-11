import React from 'react'

const MessageDisplay = (props) => {
    const {message} = props;
    return (
        <fieldset>
            <legend>MessageDisplay.jsx</legend>
            <h1>Current Message</h1>
            {message.map((message, i) => <h4 key={i}>{message}</h4>)}
        </fieldset>
    )
}

export default MessageDisplay