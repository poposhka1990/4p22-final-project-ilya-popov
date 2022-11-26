import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Counter from './components/Counter/Counter';
import Input from './components/Input/Input';
import { BUTTON_THEMES } from './utils/Constants';

function App() {
  const [ products, setProducts ] = useState([]);
  const [ isSubscribedButtonDisabled, setIsSubscribeButtoDisabled ] = useState(false);

  useEffect(() => {
    fetch('http://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((result) => {
      setProducts(result);
    });
  }, []);

  const onSubscibe = () => {
    setIsSubscribeButtoDisabled(true);

    setTimeout(() => {
      setIsSubscribeButtoDisabled(false);
      console.log('subscribed');
    }, 2000);
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Counter />
      <div className='App-container'>
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
      <div className='App-newsletter'>
        <h2>Подписаться на новости компании</h2>
        <Input type='email' placeholder='Введите email' name='email' id='email' />

        <Button disabled={isSubscribedButtonDisabled} theme={BUTTON_THEMES.light} onClick={onSubscibe}>Подписаться</Button>
      </div>
    </div>
  );
}

export default App;