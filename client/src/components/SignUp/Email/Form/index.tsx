// Functions.
import { useRef } from "react";

// Context.
import useAuthContext from "../../../../context/Auth/useAuthContext";

// Components.
import { Envelope } from "../../../Common/Icons";
import Input from "../../../Common/Form/Input";

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

  return (
    <SForm method="POST" onSubmit={handleFormSubmit} noValidate>
      <Input
        label="Enter your email"
        defaultValue={email}
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
        text="Get One Time Password"
        onClickHandler={submitHandler}
      />
    </SForm>
  );
}
