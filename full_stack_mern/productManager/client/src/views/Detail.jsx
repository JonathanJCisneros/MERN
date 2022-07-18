import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const Detail = () => {
    const [product, setProduct] = useState({});
    const {_id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <p><Link to={`/${product._id}/edit`}>Edit</Link></p>
            <button onClick={() => navigate("/products/")}>Home</button>
        </div>
    )
}

export default Detail