import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";


function AboutPage() {
    const { t } = useTranslation("about")
    return (
        <div>
            {t("О Сайте")}
            <BugButton/>
        </div>
    );
}

export default AboutPage;