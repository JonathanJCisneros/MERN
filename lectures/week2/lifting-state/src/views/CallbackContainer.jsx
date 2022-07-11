import React, {useState} from 'react'
import SiblingCounter from '../components/callback/SiblingCounter';
import SiblingDisplay from '../components/callback/SiblingDisplay';

const CallbackContainer = () => {

    const [countAtParent, setCountAtParent] = useState(0);

    const addCount = () => setCountAtParent(countAtParent + 1)
    const reduceCount = () => setCountAtParent(countAtParent - 1);
    return (
        <fieldset style={{backgroundColor: "gainsboro"}}>
            <legend>CallbackCounter.jsx</legend>
            <SiblingCounter parentReceiveFunction = {addCount}/>
            <SiblingCounter parentReceiveFunction = {reduceCount}/>
            <SiblingCounter parentReceiveFunction = {addCount}/>
            <SiblingDisplay count = {countAtParent}/>
            <h1>Count in Parent: {countAtParent}</h1>
        </fieldset>
    )
}

export default CallbackContainer