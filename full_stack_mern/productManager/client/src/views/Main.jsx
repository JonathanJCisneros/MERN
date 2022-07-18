import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ListAllProducts from '../components/ListAllProducts';
import ProductForm from '../components/ProductForm'

const Main = () => {
    const [products, setProduct] = useState([]);

    const createProduct = (product) => {
        axios.post(`http://localhost:8000/api/product`, product)
            .then(res => setProduct([...products, res.data]));
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm submitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <hr/>
            {products&& <ListAllProducts products={products} />}
        </div>
    )
}

export default Main