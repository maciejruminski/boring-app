// Styles.
import { SDescription, SHeading } from "./styles";

// Context.
import { useTranslation } from "react-i18next";

export default function Description() {
  const { t } = useTranslation();

  return (
    <SDescription>
      <p>{t("Email.1_paragraph")}</p>
      <p>{t("Email.2_paragraph")}</p>
      <SHeading>{t("Email.2_heading")}</SHeading>
      <p dangerouslySetInnerHTML={{ __html: t("Email.3_paragraph") }}></p>
    </SDescription>
  );
}
