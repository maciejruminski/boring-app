// Functions.
import { useRef, useEffect } from "react";

// Context.
import useAuthContext from "../../../../context/Auth/useAuthContext";

// Components.
import { Envelope } from "../../../Common/Icons";
import Email from "../../../Common/Form/Email";

// Styles.
import {
  SForm,
  SErrors,
  SEmailContainer,
  SLabel,
  SEmail,
  SSubmit,
} from "./styles";

export default function Form() {
  const {
    state: {
      signUp: { email, error },
    },
    actions: {
      inputOnChange,
      validateInput,
      sendPassword,
      setOneTimePasswordModalOn,
    },
  } = useAuthContext();

  const emailRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const emailInput = emailRef.current;

    if (emailInput) {
      const emailIsNotValid: boolean = !validateInput(emailInput);

      if (emailIsNotValid) {
        emailInput.focus();

        return;
      }

      sendPassword(email);
    }
  };

  const isError = error ? true : false;
  const isSuccess = !isError && email ? true : false;
  const isLabelActive = isError || isSuccess ? true : false;

  return (
    <SForm method="POST" onSubmit={handleFormSubmit} noValidate>
      <Email
        label="Enter your email"
        defaultValue={email}
        id="email"
        onChangeHandler={inputOnChange}
        labelActivity={isLabelActive}
        errorMessage={error}
        error={isError}
        success={isSuccess}
        checkValidity={true}
        required={true}
        ref={emailRef}
        icon={<Envelope />}
      />

      <SSubmit
        type="submit"
        text="Get One Time Password"
        onClickHandler={() => {
          if (isSuccess) {
            setOneTimePasswordModalOn();
          }
        }}
      />
    </SForm>
  );
}
