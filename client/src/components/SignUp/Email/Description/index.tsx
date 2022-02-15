// Styles.
import { SDescription, SHeading } from "./styles";

// Context.
import { useTranslation } from "react-i18next";

export default function Description() {
  const { t } = useTranslation();

  return (
    <SDescription>
      <p>{t("SignUp.Email.Description.p_1")}</p>
      <p>{t("SignUp.Email.Description.p_2")}</p>
      <SHeading>{t("SignUp.Email.Description.SHeading")}</SHeading>
      <p
        dangerouslySetInnerHTML={{ __html: t("SignUp.Email.Description.p_3") }}
      ></p>
    </SDescription>
  );
}
