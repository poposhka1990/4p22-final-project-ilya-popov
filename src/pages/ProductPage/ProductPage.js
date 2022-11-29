import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

function ProductPage() {
    const { userId } = useParams();
    const [ product, setProduct ] = useState({});
    
    useEffect(() => {
        (async () => {
            const response = await fetch(`http://fakestoreapi.com/products/${userId}`);
            const result = await response.json();
    
            setProduct(result);
        })();
    }, [])

    return (
        <>
            <h1>{ product.title }</h1>
            <img src={product.image}></img>
        </>
    )
}

export default ProductPage;