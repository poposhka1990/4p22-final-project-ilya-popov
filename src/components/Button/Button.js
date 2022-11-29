import PropTypes from 'prop-types';
import { BUTTON_THEMES } from '../../utils/Constants';
import classNames from 'classnames';
import './Button.scss';

function Button({ disabled = false, theme = BUTTON_THEMES.dark, onClick = () => {}, children }) {
    const onInnerClick = (event) => {
        console.log('button clicked!', event)
        onClick(event);
    }

    return (
        <button 
            onClick={onInnerClick}
            className={classNames('CommonButton',
                        `CommonButton--${theme}`,
                        {
                            'CommonButton--disabled': disabled,
                        }
                        )}>
                { children }
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;