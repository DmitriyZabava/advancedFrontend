import {classNames} from "shared/lib/classNames/classNames";

import cls from "./NavBar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "features/ThemeSwitcher";
import {useTranslation} from "react-i18next";


interface NavBarProps {
    className?: string;
}


export const NavBar = ({className}: NavBarProps) => {
    const {t}=useTranslation()
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>

            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={"/"} className={cls.mainLink}>{t("Главная")}</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={"/about"}>{t("О Сайте")}</AppLink>
            </div>

        </div>
    );
}