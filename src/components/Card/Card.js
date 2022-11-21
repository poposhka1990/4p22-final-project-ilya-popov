import './Card.css'
import Button from '../Button/Button';

function Card(props) {
    return (
        <div className='Card'>
            <img className='Card-img' src={ props.img }></img>
            <div className='Card-container'>
                <h2 className='Card-title common-header'>{ props.title }</h2>
                <p className='Card-description'>{ props.description }</p>
                <div className='Card-price common-price'>{ props.price }</div>
                <Button>Купить</Button>
            </div>
        </div>
    )
}

export default Card;