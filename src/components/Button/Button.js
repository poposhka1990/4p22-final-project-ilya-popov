import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/counter/counterSlice';
import './Button.css';

function Button({ text = 'Кнопка', children }) {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(increment());
    }

    return (
        <>
            <button className="CommonButton" onClick={onClick}>+</button>
            <button className="CommonButton">{ children }</button>
            <button className="CommonButton" onClick={() => dispatch(decrement())}>-</button>
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;