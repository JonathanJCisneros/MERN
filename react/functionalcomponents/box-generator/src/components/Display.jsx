import React from 'react'

const Display = (props) => {
    const {boxList} = props;
    return (
        <fieldset>
            <legend>Display.jsx</legend>
                {boxList.map((box, i) => <div key={i} style={{backgroundColor: box.color, height: box.size + "px", width: box.size + "px", margin: "25px"}}></div>)}        
        </fieldset>
    )
}

export default Display