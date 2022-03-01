// Controllers.
import LocalStorage from "@controllers/LocalStorage";

// Styles.
import { SSwitcher, SButton } from "./styles";

// Context.
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher(): JSX.Element {
  const { i18n } = useTranslation();

  const langs = Object.keys(i18n.services.resourceStore.data);
  const currentLang = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    LocalStorage.setLanguage(lang);
  };

  return (
    <SSwitcher isBusy={true}>
      {langs.map((lang, key) => (
        <SButton
          isActive={lang === currentLang}
          disabled={lang === currentLang}
          text={lang}
          onClickHandler={() => changeLanguage(lang)}
          key={key}
          id={lang}
        />
      ))}
    </SSwitcher>
  );
}
