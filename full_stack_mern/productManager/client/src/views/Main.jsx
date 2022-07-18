import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ListAllProducts from '../components/ListAllProducts';
import ProductForm from '../components/ProductForm'

const Main = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = (id) => setProduct(products.filter(product => product._id !== id))

    const createProduct = (product) => {
        axios.post(`http://localhost:8000/api/product`, product)
            .then(res => setProduct([...product, res.data]));
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm submitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <hr/>
            {products&& <ListAllProducts products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main