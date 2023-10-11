import { useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss"
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Theme, useTheme } from "app/providers/ThemeProvider";

import ExpandIconDark from "../../../../shared/assets/icons/expand-dark.svg"
import ExpandIconLight from "../../../../shared/assets/icons/expand-light.svg"


interface SideBarProps {
    className?: string;
}


export const SideBar = ({ className }: SideBarProps) => {
    const { theme } = useTheme()
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>

            <Button
                theme={ThemeButton.CLEAR}
                onClick={onToggle}>
                {theme === Theme.DARK ? <ExpandIconDark/> : <ExpandIconLight/>}
            </Button>

            <div
                className={cls.switchers}
            >
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
}