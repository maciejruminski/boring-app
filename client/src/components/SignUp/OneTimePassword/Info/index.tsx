// Context.
import useAuthContext from "../../../../context/Auth/useAuthContext";

// Icons.
import WarningIconPath from "../../../../images/warning.svg";

// Styles.
import { SHeading, SWarning } from "./styles";

export default function Info() {
  const {
    state: {
      signUp: { email },
    },
  } = useAuthContext();

  return (
    <>
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
    </>
  );
}
