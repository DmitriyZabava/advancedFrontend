import "./styles/index.scss"

import {NavLink} from "react-router-dom";

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";


function App() {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>

            <NavLink to={"/"}>ГЛАВНАЯ</NavLink>
            <br/>
            <NavLink to={"/about"}>О САЙТЕ</NavLink>

            <AppRouter/>
        </div>
    );
}

export default App;