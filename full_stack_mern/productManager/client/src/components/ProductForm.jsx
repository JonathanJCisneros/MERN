import React, {useState} from 'react'

const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, submitProp, operation} = props;
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)

    const handleSubmit = (e) => {
        e.preventDefault();
        submitProp({title, price, description})
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
            <button type='submit'>{operation}</button>
        </form>
    )
}

export default ProductForm