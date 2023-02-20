import React, {Suspense} from 'react';
import "./index.scss"
import {NavLink, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./component/pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./component/pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className="app">
            <NavLink to={"/"}>Главная</NavLink>
            <NavLink to={"/about"}>О сайте</NavLink>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;