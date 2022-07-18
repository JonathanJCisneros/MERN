import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const Update = () => {
    const {_id} = useParams();
    const [product, setProduct] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${_id}`, {title, price, description})
            .then(res => {
                console.log("Response: ", res)
                navigate(`/${_id}`)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label htmlFor="title">Title  </label>
                    <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label htmlFor="price">Price  </label>
                    <input type="number" name='price' onChange={(e) => setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label htmlFor="description">Description  </label>
                    <textarea name="description" id="description" cols="30" rows="5" onChange={(e) => setDescription(e.target.value)} value={description}>Product Description</textarea>
                </p>
                <br />
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default Update