// Context.
import { useAuthContext } from "@context/Auth";
import { useTranslation } from "react-i18next";

// Icons.
import WarningIconPath from "@images/warning.svg";

// Styles.
import { SHeading, SWarning } from "./styles";

export default function Info() {
  const {
    state: {
      email: { email },
    },
  } = useAuthContext();

  const { t } = useTranslation();

  return (
    <>
      <SHeading>{t("SignUp.Password.Info.SHeading")}</SHeading>
      <p
        dangerouslySetInnerHTML={{
          __html: t("SignUp.Password.Info.p_1", { email }),
        }}
      ></p>
      <p
        dangerouslySetInnerHTML={{
          __html: t("SignUp.Password.Info.p_2"),
        }}
      ></p>
      <SWarning>
        <img src={WarningIconPath} aria-hidden="true" alt="Warning icon" />
        {t("SignUp.Password.Info.SWarning")}
      </SWarning>
    </>
  );
}
