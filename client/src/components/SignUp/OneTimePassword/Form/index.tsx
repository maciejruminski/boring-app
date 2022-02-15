// Functions.
import { useRef } from "react";

// Context.
import { useAuthContext } from "@context/Auth";
import { useTranslation } from "react-i18next";

// Components.
import { Key } from "@common/Icons";
import Input from "@common/Form/Input";

// Styles.
import { SForm, SButton } from "./styles";

export default function OneTimePassword() {
  const {
    state: {
      password: { password, error },
    },
    actions: { verifyPassword, inputOnChange, validateInput },
  } = useAuthContext();

  const passwordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (validateInput(passwordRef.current as HTMLInputElement)) {
      verifyPassword(password);
    }
  };

  const { t } = useTranslation();

  return (
    <SForm method="POST" onSubmit={handleFormSubmit} noValidate>
      <Input
        label={t("SignUp.Password.Form.Input__label")}
        value={password}
        id="signUpPassword"
        onChangeHandler={inputOnChange}
        error={error}
        checkValidity={true}
        required={true}
        minLength={6}
        maxLength={6}
        ref={passwordRef}
        icon={<Key />}
      />

      <SButton type="submit" text={t("SignUp.Password.Form.SButton__text")} />
    </SForm>
  );
}
