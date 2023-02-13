import {render} from "react-dom";


import {someFn} from "./test";
import Counter from "./component/counter";


const testFunc = someFn(24)

render(
    <div>
        {testFunc}
        <Counter/>
    </div>,
    document.getElementById("root")
)