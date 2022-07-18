import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const {_id} = useParams();
    const {removeFromDom} = props;

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, []);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                removeFromDom(id)})
            .catch(err => console.log(err));
    }


    return (
        <div>
            <h1>{product.title}</h1>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <p><Link to={`/${product._id}/edit`}>Edit</Link> | <a href="/products/" onClick={(e)=> deleteProduct(product._id)}>Delete</a></p>
            <button onClick={() => navigate("/products/")}>Home</button>
        </div>
    )
}

export default Detail