// Functions.
import { useRef, useEffect } from "react";

// Controllers.
import Helper from "@controllers/Helper";

// Context.
import { useAuthContext } from "@context/Auth";
import { useTranslation } from "react-i18next";

// Styles.
import { SForm, SHeading, SNotification, SButton } from "./styles";

export default function ResendForm() {
  const {
    state: {
      email: { email, isResent },
    },
    actions: { sendPassword },
  } = useAuthContext();

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    sendPassword(email, true);
  };

  const notificationRef = useRef<HTMLParagraphElement>(null);

  useEffect(
    () =>
      Helper.setInputErrorMessageHeight(
        notificationRef.current as HTMLParagraphElement
      ),
    [isResent]
  );

  const { t } = useTranslation();

  return (
    <SForm method="POST" onSubmit={handleFormSubmit}>
      <SHeading>{t("SignUp.Password.ResendForm.SHeading")}</SHeading>
      <p>{t("SignUp.Password.ResendForm.p_1")}</p>

      {isResent && (
        <SNotification ref={notificationRef}>
          <div>{t("SignUp.Password.ResendForm.SNotification")}</div>
        </SNotification>
      )}

      <SButton
        type="submit"
        text={t("SignUp.Password.ResendForm.SButton__text")}
      />
    </SForm>
  );
}
