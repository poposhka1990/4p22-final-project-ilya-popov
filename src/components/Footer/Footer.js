import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="Footer">
            <p1><Link to={'contacts'}>Contact us</Link></p1>
        </footer>
    )
}

export default Footer;