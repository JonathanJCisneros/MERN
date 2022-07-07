import React, { Component } from 'react'

export class PropsComponent extends Component {
    render() {
        const {title, episodes, isRecommended, hashtags} = this.props;
        return (
        <fieldset>
            <legend>PropsComponent.jsx</legend>
            <h3>Title: {title}</h3>
            <h3>Episodes: {episodes}</h3>
            <h3>Is It Recommended? : {isRecommended?"Yes":"No"}</h3>
            <h3>Hastags: {hashtags.map((name) => `#${name} `)}</h3>
        </fieldset>
        )
    }
}

export default PropsComponent

// Props