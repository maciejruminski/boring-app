// Components.
import Email from "./Email";
import OneTimePassword from "./OneTimePassword";
import Spinner from "components/Common/Spinner";

// Context.
import useAuthContext from "../../context/Auth/useAuthContext";

export default function SignUp() {
  const {
    state: {
      isBusy,
      email: { isSent },
    },
  } = useAuthContext();

  if (isSent) {
    return (
      <>
        <Spinner isBusy={isBusy} />
        <OneTimePassword />
      </>
    );
  }

  return (
    <>
      <Spinner isBusy={isBusy} />
      <Email />
    </>
  );
}
