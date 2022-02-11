// Components.
import Email from "./Email";
import OneTimePassword from "./OneTimePassword";
import Spinner from "../Spinner";

export default function SignUp() {
  return (
    <>
    {/* <Spinner isBusy={isBusy} /> */}
      <Email />
      <OneTimePassword />
    </>
  );
}
