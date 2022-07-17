import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
        </div>
    )
}

export default Detail