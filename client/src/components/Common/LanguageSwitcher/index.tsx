// Styles.
import { SSwitcher, SButton } from "./styles";

// Context.
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher(): JSX.Element {
  const { i18n } = useTranslation();

  const langs = Object.keys(i18n.services.resourceStore.data);
  const currentLang = i18n.language;

  return (
    <SSwitcher isBusy={true}>
      {langs.map((lang, key) => (
        <SButton
          isActive={lang === currentLang}
          disabled={lang === currentLang}
          text={lang}
          onClickHandler={() => i18n.changeLanguage(lang)}
          key={key}
        />
      ))}
    </SSwitcher>
  );
}
