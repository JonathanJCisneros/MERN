import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'


const Starships = () => {
    const {id} = useParams() 
    const [starship, setStarship] = useState()

    useEffect (() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(result => setStarship(result.data))
            .catch(err => console.log(err))
    }, [starship])


    return (
        <div>
            {
                starship?
                <div>
                    <h1>{starship.name}</h1>
                    <h3>Manufacturer: {starship.manufacturer}</h3>
                    <h3>Starship Class: {starship.starship_class}</h3>
                    <h3>Cargo Capacity: {starship.cargo_capacity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
} Kilotons</h3>
                </div>:
                <div>
                    <h2>These are not the droids you are looking for...</h2>
                    <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification-tall-40th.jpg" alt="Kenobi" style={{height: "200px"}}/>
                </div>
            }
        </div>
    )
}

export default Starships