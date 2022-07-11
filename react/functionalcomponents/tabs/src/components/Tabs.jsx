import React from 'react'



const Tabs = () => {
    const tabs = [
        {title : "Awake", content : "test1"},
        {title : "Sleep", content : "test2"},
        {title : "Append", content : "test3"}
    ]
    return (
        <div>
            {tabs.map((item, i) => <button key={i}>{item.title}</button>)}
        </div>
    )
}

export default Tabs