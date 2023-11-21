import { useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss"
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/LinkAbout.svg";
import HomeIcon from "shared/assets/icons/LinkHome.svg"


interface SideBarProps {
    className?: string;
}


export const SideBar = ({ className }: SideBarProps) => {
    const { t } = useTranslation()

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar"

            className={classNames(cls.SideBar,
                { [cls.collapsed]: collapsed },
                [className])}
        >
            <div className={cls.items}>
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.main}
                >
                    <HomeIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t("Главная")}
                    </span>
                </AppLink >
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.about}
                >
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t("О Сайте")}
                    </span>
                </AppLink>
            </div>

            <Button
                className={cls.collapseBtn}
                data-testid="sidebar-toggle"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
                square={true}
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>

            <div
                className={cls.switchers}
            >
                <ThemeSwitcher/>
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
}