// Functions.
import { useRef } from "react";

// Context.
import useAuthContext from "../../../context/Auth/useAuthContext";

// Components.
import { Key } from "../../Common/Icons";
import Input from "../../Common/Form/Input";

// Icons.
import WarningIconPath from "../../../images/warning.svg";

// Styles.
import {
  SOneTimePassword,
  SOneTimePasswordContainer,
  SLock,
  SForm,
  SHeading,
  SWarning,
  SButton,
  SSecondForm,
  SSecondButton,
} from "./styles";

export default function OneTimePassword() {
  const {
    state: {
      signUp: { email, password, error },
      modals: { isOneTimePasswordModalOpen },
      isFadingOut,
    },
    actions: { inputOnChange, verifyOneTimePassword, validateInput },
  } = useAuthContext();

  const oneTimePasswordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const oneTimePassword = oneTimePasswordRef.current;

    if (oneTimePassword) {
      // const emailIsNotValid: boolean = !validateInput(oneTimePassword);

      // if (emailIsNotValid) {
      //   oneTimePassword.focus();

      //   return;
      // }

      verifyOneTimePassword(evt, oneTimePassword.value);
    }
  };

  // Input musi sprawdzac sam z siebie czy jest error czy nie
  const isError = Boolean(error);
  const isSuccess = Boolean(!isError && password);
  const isLabelActive = Boolean(isError || isSuccess);

  return (
    // <SOneTimePassword isModalOpen={isOneTimePasswordModalOpen}>
    <SOneTimePassword isModalOpen={true}>
      <SOneTimePasswordContainer isFadingOut={isFadingOut}>
        <SHeading>You are almost there!</SHeading>
        <p>
          We sent a <b>One Time Password</b> to your email address at {email}.
        </p>
        <p>
          Please check your email (and the spam folder if necessary), enter the{" "}
          <b>OTP</b> and click on login button.
        </p>

        <SWarning>
          <img
            src={WarningIconPath}
            aria-hidden="true"
            alt="Ikona ostrzegawcza"
          />
          The OTP will expire in 15 minutes.
        </SWarning>

        <SForm method="POST" onSubmit={handleFormSubmit} noValidate>
          <Input
            label="Enter the password"
            defaultValue={password}
            id="signUpPassword"
            onChangeHandler={inputOnChange}
            labelActivity={isLabelActive}
            errorMessage={error}
            error={isError}
            success={isSuccess}
            checkValidity={true}
            required={true}
            minLength={6}
            maxLength={6}
            ref={oneTimePasswordRef}
            icon={<Key />}
          />

          <SButton type="submit" text="Login" />
        </SForm>

        <SSecondForm method="POST" action="resend">
          <SHeading>No email?</SHeading>
          <p>If you haven't received your email, click here to resend.</p>
          <SSecondButton type="submit" text="Resend One Time Password" />
        </SSecondForm>

        <SLock />
      </SOneTimePasswordContainer>
    </SOneTimePassword>
  );
}
