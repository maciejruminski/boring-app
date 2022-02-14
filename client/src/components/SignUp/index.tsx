// Components.
import Email from "./Email";
import OneTimePassword from "./OneTimePassword";
import Spinner from "@common/Spinner";

// Context.
import { useAuthContext } from "@context/Auth";

export default function SignUp() {
  const {
    state: {
      isBusy,
      email: { isSent },
    },
  } = useAuthContext();

  // const { t, i18n } = useTranslation();

  // console.log(Object.keys(i18n.services.resourceStore.data));

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
      {/* <button onClick={() => i18n.changeLanguage("fr")}>Switcher</button> */}
      <Spinner isBusy={isBusy} />
      <Email />
    </>
  );
}
