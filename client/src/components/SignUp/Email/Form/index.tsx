// Functions.
import { useRef } from "react";

// Context.
import { useAuthContext } from "@context/Auth";
import { useTranslation } from "react-i18next";

// Components.
import { Envelope } from "@common/Icons";
import Input from "@common/Form/Input";

// Styles.
import { SForm, SSubmit } from "./styles";

export default function Form() {
  const {
    state: {
      email: { email, error },
    },
    actions: { inputOnChange, sendPassword, setPasswordModalOn, validateInput },
  } = useAuthContext();

  const emailRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (validateInput(emailRef.current as HTMLInputElement)) {
      sendPassword(email);
    }
  };

  const submitHandler = () => {
    if (!error && email) {
      setPasswordModalOn();
    }
  };

  const { t } = useTranslation();

  return (
    <SForm method="POST" onSubmit={handleFormSubmit} noValidate>
      <Input
        label={t("SignUp.Email.Form.Input__label")}
        value={email}
        id="email"
        type="email"
        onChangeHandler={inputOnChange}
        error={error}
        checkValidity={true}
        required={true}
        ref={emailRef}
        icon={<Envelope />}
      />

      <SSubmit
        type="submit"
        onClickHandler={submitHandler}
        text={t("SignUp.Email.Form.SSubmit__text")}
        id="emailSubmit"
      />
    </SForm>
  );
}
