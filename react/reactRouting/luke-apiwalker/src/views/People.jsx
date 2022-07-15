import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const People = () => {
    const {id} = useParams() 
    const [person, setPerson] = useState()

    useEffect (() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(result => setPerson(result.data))
            .catch(err => console.log(err))
    }, [person])


    return (
        <div>
            {
                person?
                <div>
                    <h1>{person.name}</h1>
                    <h3>Eye Color: {person.eye_color}</h3>
                    <h3>Hair Color: {person.hair_color}</h3>
                    <h3>Weight: {person.mass.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}kg</h3>
                    <p>Home World: <a href={person.homeworld} target='_blank'>View</a></p>
                </div>:
                <div>
                    <h2>These are not the droids you are looking for...</h2>
                    <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification-tall-40th.jpg" alt="Kenobi" style={{height: "200px"}}/>
                </div>
            }
        </div>
    )
}

export default People