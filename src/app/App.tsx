import "./styles/index.scss"

import {Suspense} from 'react';
import {NavLink, Route, Routes} from "react-router-dom";

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


function App() {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>

            <NavLink to={"/"}>ГЛАВНАЯ</NavLink>
            <br/>
            <NavLink to={"/about"}>О САЙТЕ</NavLink>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage/>}/>
                    <Route path={"/"} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;