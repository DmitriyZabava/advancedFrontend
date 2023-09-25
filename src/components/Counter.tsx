import {useState} from "react";
import classes from "./Counter.module.scss"

export function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <span>COUNTER</span>
            <div>{count}</div>
            <button
                className={classes.btn}
                onClick={increment}>Increment
            </button>
        </div>
    );
}
