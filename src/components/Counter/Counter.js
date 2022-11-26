import { useState } from 'react';
import Button from '../Button/Button';
import './Counter.css';

function Counter() {
    const [ counter, setCounter ] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <Button onClick={decrement}>-</Button>
            { counter }
            <Button onClick={increment}>+</Button>
        </div>
    )
}

export default Counter;