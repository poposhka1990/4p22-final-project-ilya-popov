import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Input from './components/Input/Input';

function App() {
  const arr = [
    {
      title: 'Заголовок 1',
      description: '1',
      img: 'https://s1.1zoom.ru/big7/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_2560x1600.jpg',
      price: 100
    },
    {
      title: 'Заголовок 2',
      description: '1',
      img: 'https://s1.1zoom.ru/big7/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_2560x1600.jpg',
      price: 200
    },
    {
      title: 'Заголовок 3',
      description: '1',
      img: 'https://s1.1zoom.ru/big7/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_2560x1600.jpg',
      price: 300
    },
    {
      title: 'Заголовок 4',
      description: '1',
      img: 'https://s1.1zoom.ru/big7/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_2560x1600.jpg',
      price: 400
    }
  ]
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div className='App-container'>
        {
          arr.map((item, index) => {
            return <Card key={index}
                        title={item.title} 
                        description={item.description}
                        img={item.img}
                        price={item.price}/>
          })
        }
      </div>
      <div className='App-newsletter'>
        <h2>Подписаться на новости компании</h2>
        <Input type='email' placeholder='Введите email' name='email' id='email' />

        <Button>Подписаться</Button>
      </div>
    </div>
  );
}

export default App;
