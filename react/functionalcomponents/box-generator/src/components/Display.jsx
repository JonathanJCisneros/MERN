import React from 'react'

const Display = (props) => {
    const {color} = props;
    return (
        <div style={{backgroundColor: color, height: "150px", width: "150px"}}></div>
    )
}

export default Display