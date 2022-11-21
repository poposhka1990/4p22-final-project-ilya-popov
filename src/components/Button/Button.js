import PropTypes from 'prop-types';
import './Button.css';

function Button({ text = 'Кнопка', children }) {
    return (
        <button className="CommonButton">{ children }</button>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;