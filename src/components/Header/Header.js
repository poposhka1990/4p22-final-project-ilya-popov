import './Header.css';
import img2 from '../../assets/img/favourites.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const count = useSelector((state) => state.counter.value);

    return (
        <header className='header'>
            <div className='header__link'>
                <Link to={'/'}>
                    <h1>Countries of the World</h1>
                </Link>
            </div>
            <div className='header__favourites'>
                <Link to={'favourites'}>
                    <img className='Header__img' src={img2} alt='favourites icon'></img>
                    <span>{ count }</span>
                </Link>
            </div>
        </header>
    )
}

export default Header;
