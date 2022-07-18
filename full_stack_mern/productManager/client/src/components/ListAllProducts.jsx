import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom'

const ListAllProducts = (props) => {
    const {products, removeFromDom} = props;

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => removeFromDom(id))
            .catch(err => console.log(err));
    }

    return (
        <div>
            {products.map((product, i) =>
                <div key={i}>
                    <h2><Link to={`/${product._id}`}>{product.title}</Link>
                        <span>  |  </span>
                        <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
                    </h2> 
                </div>
            )}
        </div>
    )
}

export default ListAllProducts