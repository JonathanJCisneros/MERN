import React, {useState} from 'react'
import MessageDisplay from '../components/messageBoard/MessageDisplay'
import MessageForm from '../components/messageBoard/MessageForm'

const MessageBoard = () => {
    const [currentMsg, setCurrentMsg] = useState([]);

    const youveGotMail = ( newMessage ) => setCurrentMsg([...currentMsg, newMessage ] );

    return (
        <fieldset>
            <legend>MessageBoard.jsx</legend>
            <MessageForm onNewMessage={ youveGotMail }/>
            <MessageDisplay message={currentMsg}/>
        </fieldset>
    )
}

export default MessageBoard