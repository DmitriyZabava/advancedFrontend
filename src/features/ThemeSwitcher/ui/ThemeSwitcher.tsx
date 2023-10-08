import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss"
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import MoonIcon from "shared/assets/icons/moon-stars-icon.svg"
import SunIcon from "shared/assets/icons/sun-icon.svg"


interface ThemeSwitcherProps {
    className?: string;
}


export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <MoonIcon/> : <SunIcon/>}
        </Button>
    );
}