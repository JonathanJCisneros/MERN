import React, { useState } from 'react'
import CompleteMessageDisplay from '../components/completeMessageBoard/CompleteMessageDisplay'
import CompleteMessageForm from '../components/completeMessageBoard/CompleteMessageForm'

// 1. Complete the form
// 2. make sur ethe form is able to send ino to the parent
// 3. display be able to display messages

const CompleteMessageBoard = () => {
    const [messages, setMessages] = useState([])

    const receiveNewMessage = (newMessageObject) => setMessages([...messages, newMessageObject])

    const updateList = (updatedList) => setMessages(updatedList);
    return (
        <fieldset>
            <legend>CompleteMessageBoard.jsx</legend>
            <CompleteMessageForm newMessage={receiveNewMessage}/>
            <CompleteMessageDisplay newList={messages} onListUpdate = {updateList}/>
        </fieldset>
    )
}

export default CompleteMessageBoard