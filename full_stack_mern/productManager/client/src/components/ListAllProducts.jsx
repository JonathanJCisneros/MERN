import React from 'react'
import {Link} from 'react-router-dom'

const ListAllProducts = (props) => {
    const {products} = props;
    return (
        <div>
            {products.map((product, i) =>
                <div key={i}>
                    <h2><Link to={`/${product._id}`}>{product.title}</Link></h2>
                </div>
            )}
        </div>
    )
}

export default ListAllProducts