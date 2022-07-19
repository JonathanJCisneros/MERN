import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton';

const ListAllProducts = (props) => {

    const {products, removeFromDom} = props;
    

    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res => removeFromDom(id))
    }

    return (
        <div>
            {products.map((product, i) =>
                <div key={i}>
                    <h2><Link to={`/${product._id}`}>{product.title}</Link>
                        <span>  |  </span>
                        <DeleteButton successCallback={() => deleteProduct(product._id)}/>
                    </h2> 
                </div>
            )}
        </div>
    )
}

export default ListAllProducts