import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import MoonIcon from "shared/assets/icons/moon-stars-icon.svg"
import SunIcon from "shared/assets/icons/sun-icon.svg"


interface ThemeSwitcherProps {
    className?: string;
}


export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames("", {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <MoonIcon/> : <SunIcon/>}
        </Button>
    );
}