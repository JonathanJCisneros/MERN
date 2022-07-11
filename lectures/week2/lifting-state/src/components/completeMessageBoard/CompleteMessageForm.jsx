import React, {useState} from 'react'

const CompleteMessageForm = (props) => {
    const [content, setContent] = useState("")
    const [receiver, setReceiver] = useState("")
    const [isImportant, setIsImportant] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            content : content,
            receiver : receiver,
            isImportant : isImportant
        }
        props.newMessage(newMessage)

    }



    return (
        <fieldset>
            <legend>CompleteMessageDisplay.jsx</legend>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="content">Content </label>
                    <input type="text" name='content' onChange={e => setContent(e.target.value)} value={content}/>
                </div>
                <div>
                    <label htmlFor="receiver">Receiver </label>
                    <select name="receiver" onChange={e => setReceiver(e.target.value)} value={receiver}>
                        <option hidden>Choose...</option>
                        <option value="Alex Miller">Alex Miller</option>
                        <option value="Martha Smith">Martha Smith</option>
                        <option value="Roger Anderson">Roger Anderson</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="isImportant">Important? </label>
                    <input type="checkbox" name='isImportant' onChange={e => setIsImportant(e.target.checked)} checked={isImportant}/>
                </div>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </fieldset>
    )
}

export default CompleteMessageForm