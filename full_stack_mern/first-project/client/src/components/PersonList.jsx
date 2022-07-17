import React from 'react'

const PersonList = (props) => {
    const {people} = props;
    return (
        <div>
            {people.map( (person, i) =>
                <p key={i}>{person.lastName}, {person.firstName}</p>
            )}
        </div>
    )
}

export default PersonList