import './IndexPage.css';
import { useEffect, useState } from 'react';
import { Card } from '@mui/material';

function IndexPage() {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
      fetch('http://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      });
    }, []);
    
    return (
        <div className='Index-container'>
        {
          products.map((item, index) => {
            return <Card key={index}
                        title={item.title} 
                        description={item.description}
                        onClick={(event) => console.log('click on card', event)}
                        img={item.image}
                        price={item.price}/>
          })
        }
      </div>
    )
}

export default IndexPage;