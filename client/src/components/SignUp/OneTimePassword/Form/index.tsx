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

  return (
    <SForm method="POST" onSubmit={handleFormSubmit} noValidate>
      <Input
        label="Enter the password"
        defaultValue={password}
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

      <SButton type="submit" text="Login" />
    </SForm>
  );
}
