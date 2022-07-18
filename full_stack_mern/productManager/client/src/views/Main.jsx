import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ListAllProducts from '../components/ListAllProducts';
import ProductForm from '../components/ProductForm'

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
    }, [])

    const createProduct = (product) => {
        axios.post(`http://localhost:8000/api/product`, product)
            .then(res => setProducts([...products, res.data]));
    }

    const removeFromDom = (id) => setProducts(products.filter(product => product._id !== id))

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm submitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" operation="Create"/>
            <hr/>
            {products&& <ListAllProducts products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main