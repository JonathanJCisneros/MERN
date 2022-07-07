// import React
import React, { Component } from 'react'

// define class
export class StateComponent extends Component {
    constructor(props) {
        super(props)
        this.state ={
            count : 0,
            likes : 100
        }
    }
render() {
    const alert2 = (message) => alert(message);
    const {propsLikes} = this.props
    const addLikes = () => this.setState({likes: this.props.likes + 1});
    return (
        <fieldset>
            <legend>StateComponent.jsx</legend>
            <h1>State Demo</h1>
            <button onClick={()=>alert("Hi")}>Alert me!</button> 
            <span>|</span> 
            <button onClick={()=>alert2("Big LAUGH")}>Alert Test 2</button>
            <p><button onClick={()=> this.setState({count: this.state.count + 1})}> Add Count</button></p>
            <p><button onClick={addLikes}> Add Likes </button></p>
            <h1>Count: {this.state.count}</h1>
            <h1>Likes: {propsLikes}</h1>
        </fieldset>
    )
}
}


// export
export default StateComponent
