import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton';

const ListAllProducts = () => {
    const [products, setProduct] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProduct(res.data))
    }, [])

    const removeFromDom = (id) => setProduct(products.filter(product => product._id !== id))


    return (
        <div>
            {products.map((product, i) =>
                <div key={i}>
                    <h2><Link to={`/${product._id}`}>{product.title}</Link>
                        <span>  |  </span>
                        <DeleteButton id={product._id} successCallback={() => removeFromDom(product._id)}/>
                    </h2> 
                </div>
            )}
        </div>
    )
}

export default ListAllProducts