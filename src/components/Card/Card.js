import './Card.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Card({ img, title, description, price, id, onClick = () => {} }) {
    return (
        <Link to={`product/${id}`} className='Card' onClick={() => onClick(title)}>
            <img className='Card-img' src={ img } alt='title'></img>
            <div className='Card-container'>
                <h2 className='Card-title common-header'>{ title }</h2>
                <p className='Card-description'>{ description }</p>
                <div className='Card-price common-price'>{ price }</div>
                <div className='Card-button'>
                    <Button>Купить</Button>
                </div>
            </div>
        </Link>
    )
}

export default Card;