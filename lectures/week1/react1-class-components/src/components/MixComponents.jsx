import React, { Component } from 'react'

export class MixComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            likes : this.props.mixLikes
        }
    }
    addLikes = () => this.setState({likes : this.state.likes + 1});

    render() {
        return (
            <fieldset>
                <legend>MixComponents</legend>
                <h1>Mix Demo</h1>
                <button onClick={() => alert("Hello")}>Alert me!</button> 
                <p><button onClick={()=> this.setState({count: this.state.count + 1})}> Add Count</button></p>
                <p><button onClick={this.addLikes}> Add Likes </button></p>
                <h1>Count: {this.state.count}</h1>
                <h1>Likes: {this.state.likes}</h1>
            </fieldset>
        
        )
    }
}

export default MixComponents