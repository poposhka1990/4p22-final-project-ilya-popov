import './PagesStyles.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import img from '../img/search.png';
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';
import { CountryPage } from './CountryPage';

const IndexPage = () => {
    
    const [ countries, setCountries] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ currentPage, setCurrentPage] = useState(1);
    const [ countriesPerPage ] = useState(10);
    
    const getCountries = () => {
        setLoading(true);
        axios.get('https://restcountries.com/v2/all')
        .then((response) => {
            setCountries(response.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        getCountries()
    }, [])

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const [value, setValue] = useState('');

    const searchedCountries = countries.filter(country => {
        return country.name.toLowerCase().includes(value.toLowerCase());
    })

    const lastCountryIndex = currentPage * countriesPerPage;
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className='container'>
            <div className="form">
                <form className="search__form">
                <img src={img} alt="img" className="search__img" />
                    <input
                        type="text"
                        placeholder="Type a country..."
                        className="search__input"
                        onChange={(event) => setValue(event.target.value)}
                        />
                    
                </form>
            </div>
            <Pagination 
                                countriesPerPage={countriesPerPage}
                                totalCountries={ countries.length }
                                paginate={paginate}/> 
            <div className="countries">
            {
                searchedCountries.map((country) => {
                    return (
                            <div key={country.name} className="item">
                                <div country={ currentCountry } loading={ loading }/>
                                    <div lang='en' className='item__text'>
                                        <Link to={`name/${country.name}`} className="Card">
                                            <img src={ country.flags.png } alt={`${country.name}'s flag`} className="item__img" style={{width:250}}></img>
                                            <p className='item__name' lang='en'>{ country.name }</p>
                                            <p>{ country.capital }</p>
                                            <p>{ `Population: ${(country.population).toLocaleString('ru')}` }</p>
                                        </Link>
                                        <Button className='item__button'><Link to={'favourites'}>Favourite</Link></Button>
                                    </div>
                                
                        </div>   
                    )
                }
            )}
            </div>
        
        </div>  
    )

}

export default IndexPage;