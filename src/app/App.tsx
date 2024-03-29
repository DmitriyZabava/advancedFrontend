import { Suspense } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBars";
import { Loader } from "shared/ui/Loader";



function App() {
    const { theme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<Loader/>}>
                <NavBar/>

                <div className="content-page">
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
}

export default App;