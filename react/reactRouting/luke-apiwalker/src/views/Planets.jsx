import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'


const Planets = () => {
    const {id} = useParams() 
    const [planet, setPlanet] = useState()

    useEffect (() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(result => setPlanet(result.data))
            .catch(err => console.log(err))
    }, [planet])


    return (
        <div>
            {
                planet?
                <div>
                    <h1>{planet.name}</h1>
                    <h3>Diameter: {planet.diameter} km</h3>
                    <h3>Climate: {planet.climate}</h3>
                    <h3>Population: {planet.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                </div>:
                <div>
                    <h2>These are not the droids you are looking for...</h2>
                    <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification-tall-40th.jpg" alt="Kenobi" style={{height: "200px"}}/>
                </div>
            }
        </div>
    )
}
export default Planets