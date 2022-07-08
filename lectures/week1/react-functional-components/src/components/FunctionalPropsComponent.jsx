import React from 'react'

const FunctionalPropsComponent = (props) => {
    const {title, episodes, isRecommended, hashtags} = props;
    return (
        <fieldset>
            <legend>FunctionalPropsComponent</legend>
            <h1>Title: {title}</h1>
            <h3>Episodes: {episodes}</h3>
            <h3>Recommended?: {isRecommended?"Yes":"No"}</h3>
            <h3>Hashtags: </h3>
            {hashtags.map((tag, i) => <li key={i}>{tag}</li>)}
        </fieldset>
    )
}

export default FunctionalPropsComponent