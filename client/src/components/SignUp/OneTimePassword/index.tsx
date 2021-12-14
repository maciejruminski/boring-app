import styled from "styled-components";

// Functions.
import { useRef, useEffect } from "react";

// Context.
import { useGlobalContext } from "../../../context";

// Components.
import { Key, Lock } from "../../Common/Icons";

import {
  SForm,
  SEmailContainer,
  SLabel,
  SEmail,
  SErrors,
  SSubmit,
} from "./styles";

const SOneTimePassword = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: ${({ isModalOpen }) => (isModalOpen ? "1" : "0")};
  transform: ${({ isModalOpen }) =>
    isModalOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  background: linear-gradient(135deg, #131c50, #0c0e1a);
  color: white;
  padding: 60px 40px;
  box-sizing: border-box;
  /* display: none; */

  h3 {
    font-weight: 500;
    font-size: 24px;
    margin: auto 0 0;
    color: #ffffff;
    color: #abc2d4;
    letter-spacing: 0.5px;
  }

  p {
    margin: 17px 0 25px;
    font-weight: 300;
    font-size: 17px;
    line-height: 1.5;
    color: #abc2d4;
    color: #ffffff;

    b {
      font-weight: 600;
      font-family: inherit;
    }

    a {
      color: #40a2f8;
      font-weight: 400;
      text-decoration: underline;
    }
  }

  .alert {
    font-size: 14px;
    font-weight: 500;
    color: #abc2d4;
  }

  .lock {
    position: absolute;
    top: 20px;
    right: 100px;
    transform: translateX(50%);
    z-index: 0;
    opacity: 0.1;
    width: 600px;
    height: auto;
    fill: #0c3d68;
  }
`;

export default function OneTimePassword() {
  const {
    state: {
      signUp: { email, password, error },
    },
    actions: { inputOnChange, verifyOneTimePassword, validateInput },
  } = useGlobalContext();
  const oneTimePasswordRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const oneTimePassword = oneTimePasswordRef.current;

    if (oneTimePassword) {
      const emailIsNotValid: boolean = !validateInput(oneTimePassword);

      if (emailIsNotValid) {
        oneTimePassword.focus();

        return;
      }

      verifyOneTimePassword(evt, oneTimePassword.value);
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
  }, [error, password]);

  console.log({password});

  return (
    <SOneTimePassword isModalOpen={true}>
      <h3 className="register-heading">You are almost there!</h3>
      <p>
        We sent a <b>One Time Password</b> to your email address at
        {email}.
      </p>
      <p>
        Please check your email (and the spam folder if necessary), enter the{" "}
        <b>OTP</b> and click on login button. If you haven't received your
        email, <a href="#">click here to resend</a>.
      </p>

      <p className="alert">
        ! The <b>OTP</b> will expire in 15 minutes.
      </p>

      <SForm method="POST" onSubmit={handleFormSubmit} noValidate>
        <SEmailContainer isError={!!error} isSuccess={!!(!error && password)}>
          <SLabel isActive={!!(error || password)} htmlFor="signUpPassword">
            Enter the password
          </SLabel>
          <SEmail
            isError={!!error}
            isSuccess={!!(!error && password)}
            ref={oneTimePasswordRef}
            onChange={inputOnChange}
            type="text"
            minLength={6}
            maxLength={6}
            name="password"
            id="signUpPassword"
            required
            autoComplete="off"
            autoCorrect="off"
          />
          <Key />
        </SEmailContainer>

        {error && (
          <SErrors ref={errorRef}>
            <div>{error}</div>
          </SErrors>
        )}

        <SSubmit type="submit" value="Login" />
      </SForm>

      {/* <Lock /> */}

      {/* <form method="POST" action="resend">
        <p className="full">
          <button type="submit">resend otp</button>
        </p>
      </form> */}
    </SOneTimePassword>
  );
}
