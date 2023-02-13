import React, {useState} from 'react';
import "./counterStyle.scss"

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => (setCount(count + 1))

    return (
        <div className="counter">
            <h1>{count}</h1>
            <button
                className="counter_button"
                onClick={increment}>
                Increment
            </button>
        </div>
    );
};

export default Counter;