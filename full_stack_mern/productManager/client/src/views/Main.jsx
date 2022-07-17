import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ListAllProducts from '../components/ListAllProducts';
import ProductForm from '../components/ProductForm'

const Main = () => {
    const [products, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm/>
            <hr/>
            {loaded&& <ListAllProducts products={products}/>}
        </div>
    )
}

export default Main