import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import ProductForm from '../components/ProductForm';

const Update = () => {
    const {_id} = useParams();
    const [product, setProduct] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res => setProduct(res.data))
    }, [_id]);

    const updateProduct = (product) => {
        axios.put(`http://localhost:8000/api/product/${_id}`, product)
            .then(res => navigate(`/${_id}`))
    }

    return (
        <div>
            <h1>Update Product</h1>
            {product&& <ProductForm submitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} operation="Update"/>}
        </div>
    )
}

export default Update