import React, { Component } from 'react'

export class MixComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            likes : 100,
            like  : this.props.likes
        }
    }
    addLikes = () => this.setState({likes : this.state.likes + 1});
    addLike = () => this.setState({like: this.state.like + 1});

    render() {
        return (
            <fieldset>
                <legend>MixComponent.jsx</legend>
                <h1>Mix Demo</h1>
                <button onClick={() => alert("New Alert")}>Alert me!</button> 
                <p>
                    <button onClick={()=> this.setState({count: this.state.count + 1})}> Add Count</button>
                    <span>  |  </span>  
                    <button onClick={this.addLikes}> Add Likes </button>
                </p>
                <p><button onClick={this.addLike}>Add Likes from Props</button></p>
                <h1>Count: {this.state.count}</h1>
                <h1>Likes: {this.state.likes}</h1>
                <h1>Likes from props: {this.state.like}</h1>
            </fieldset>
        )
    }
}

export default MixComponent