import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/product`, {title, price, description})
            .then(res => console.log("Response: ", res))
            .catch(err => console.log("There was an Error: ", err))
    }


    return (
        <form onSubmit={handleSubmit}>
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
            <button type='submit'>Create</button>
        </form>
    )
}

export default ProductForm