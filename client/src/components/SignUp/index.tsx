// Components.
import Email from "./Email";
import OneTimePassword from "./OneTimePassword";
import Spinner from "components/Common/Spinner";

// Context.
import useAuthContext from "../../context/Auth/useAuthContext";

// import SignUp from "components/SignUp";

export default function SignUp() {
  const {
    state: { isBusy },
  } = useAuthContext();

  return (
    <>
      <Spinner isBusy={isBusy} />
      <Email />
      <OneTimePassword />
    </>
  );
}
