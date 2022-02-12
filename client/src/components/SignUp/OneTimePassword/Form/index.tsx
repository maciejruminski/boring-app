// Functions.
import { useRef } from "react";

// Context.
import useAuthContext from "../../../../context/Auth/useAuthContext";

// Components.
import { Key } from "../../../Common/Icons";
import Input from "../../../Common/Form/Input";

// Styles.
import { SForm, SButton } from "./styles";

export default function OneTimePassword() {
  const {
    state: {
      signUp: { password, error },
    },
    actions: { verifyOneTimePassword, setOneTimePassword },
  } = useAuthContext();

  const oneTimePasswordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const oneTimePassword = oneTimePasswordRef.current;

    if (oneTimePassword) {
      verifyOneTimePassword(evt, oneTimePassword.value);
    }
  };

  return (
    <SForm method="POST" onSubmit={handleFormSubmit} noValidate>
      <Input
        label="Enter the password"
        defaultValue={password}
        id="signUpPassword"
        onChangeHandler={setOneTimePassword}
        error={error}
        checkValidity={true}
        required={true}
        minLength={6}
        maxLength={6}
        ref={oneTimePasswordRef}
        icon={<Key />}
      />

      <SButton type="submit" text="Login" />
    </SForm>
  );
}
