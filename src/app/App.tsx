import "./styles/index.scss"

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";


function App() {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <NavBar/>

            <AppRouter/>

            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
}

export default App;