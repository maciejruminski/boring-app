// Functions.
import React, { useRef, useEffect } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import { Envelope } from "../../../Common/Icons";

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
    actions: { inputOnChange, validateInput, sendPassword },
  } = useGlobalContext();

  const emailRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

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

  useEffect(() => {
    const error = errorRef.current;
    const text = error?.children[0];
    const height = text?.clientHeight;

    if (error) {
      error.style.height = height + "px";
      error.style.opacity = "1";
    }
  }, [error, email]);

  return (
    <SForm method="POST" onSubmit={handleFormSubmit} noValidate>
      <SEmailContainer isError={!!error} isSuccess={!!(!error && email)}>
        <SLabel isActive={!!(error || email)} htmlFor="email">
          Enter your email
        </SLabel>
        <SEmail
          isError={!!error}
          isSuccess={!!(!error && email)}
          ref={emailRef}
          onChange={(evt) => inputOnChange(evt)}
          type="email"
          name="email"
          id="email"
          required
          autoComplete="off"
          autoCorrect="off"
        />
        <Envelope />
      </SEmailContainer>

      {error && (
        <SErrors ref={errorRef}>
          <div>{error}</div>
        </SErrors>
      )}

      <SSubmit type="submit" value="Get one time password" />
    </SForm>
  );
}
