import avatar from "shared/assets/icons/carbon_user-avatar-filled.png"
import { useTranslation } from "react-i18next";


function MainPage() {
    const { t } = useTranslation("main")
    return (
        <div>
            {t("Главная страница")}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <img src={avatar} alt="Avatar"/>
        </div>
    );
}

export default MainPage;