import React, {useState} from 'react'
import SiblingCounter from '../components/callback/SiblingCounter';
import SiblingDisplay from '../components/callback/SiblingDisplay';

const CallbackContainer = () => {

    const [countAtParent, setCountAtParent] = useState(0);

    const receiveNewCount = () => setCountAtParent(countAtParent + 1)
    return (
        <fieldset style={{backgroundColor: "gainsboro"}}>
            <legend>CallbackCounter.jsx</legend>
            <SiblingCounter parentReceiveFunction = {receiveNewCount}/>
            <SiblingCounter parentReceiveFunction = {receiveNewCount}/>
            <SiblingCounter parentReceiveFunction = {receiveNewCount}/>
            <SiblingDisplay count = {countAtParent}/>
            <h1>Count in Parent: {countAtParent}</h1>
        </fieldset>
    )
}

export default CallbackContainer