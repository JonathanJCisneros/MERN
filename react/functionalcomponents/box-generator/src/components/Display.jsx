import React from 'react'

const Display = (props) => {
    const {boxList} = props;
    return (
        <fieldset>
            <legend>Display.jsx</legend>
                {boxList.map((item, i) => <div key={i} style={{backgroundColor: item.color, height: item.size + "px", width: item.size + "px", margin: "25px"}}></div>)}        
        </fieldset>
    )
}

export default Display