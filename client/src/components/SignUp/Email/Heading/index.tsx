// Styles.
import { SHeading } from "./styles";

// Context.
import { useTranslation } from "react-i18next";

export default function Heading() {
  const { t } = useTranslation();

  return (
    <SHeading
      dangerouslySetInnerHTML={{ __html: t("SignUp.Email.Heading.SHeading") }}
    ></SHeading>
  );
}
