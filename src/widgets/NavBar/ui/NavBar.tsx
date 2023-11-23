import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss"
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";


interface NavBarProps {
    className?: string;
}
const mockString = `Это не финальное состояние модального окна,
     в ходе разработки мы будем его менять = делать рефакторинг. 
    Также прошу заметить, что переопределение переменных из темы это АНТИПАТЕРН!
     Так делать не стоит.`;

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal]=useState(false);

    const onToggleModal = useCallback( () => {
        setIsAuthModal((prev) => !prev);
    },[])

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>

            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR}
                onClick={onToggleModal}
            >
                {t("Войти")}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                {mockString}
            </Modal>

        </div>
    );
}
