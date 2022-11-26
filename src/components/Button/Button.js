import PropTypes from 'prop-types';
import { BUTTON_THEMES } from '../../utils/Constants';
import './Button.css';


function Button({ disabled = false, theme = BUTTON_THEMES.dark, onClick = () => {}, children }) {
    const onInnerClick = (event) => {
        console.log('button clicked!', event)
        onClick(event);
    }

    let buttonClass = `CommonButton CommonButton--${theme}`;

    if (disabled) {
        buttonClass += ' CommonButton--disabled';
    }



    return (
        <button onClick={onInnerClick} className={buttonClass}>{ children }</button>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;