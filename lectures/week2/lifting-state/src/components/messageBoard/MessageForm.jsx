import React, {useState} from 'react'

const MessageForm = (props) => {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage( msg );
        setMsg("");
    };

    return (
        <fieldset>
            <legend>MessageForm.jsx</legend>
            <form onSubmit={ handleSubmit }>
                <h1>Set Message</h1>
                <textarea 
                    rows="4"
                    cols="50"
                    placeholder="Enter your message here"
                    onChange={ (e) => setMsg(e.target.value) }
                    value={ msg }
                ></textarea>
                <br />
                <input type="submit" value="Send Message" />
            </form>
        </fieldset>
    )
}

export default MessageForm