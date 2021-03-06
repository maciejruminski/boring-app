// Functions.
import { useEffect } from "react";

// Components.
import Heading from "./Heading";
import Description from "./Description";
import Form from "./Form";
import LanguageSwitcher from "@common/LanguageSwitcher";

// Context.
import { useAuthContext } from "@context/Auth";

// Styles.
import { SEmail, SLock } from "./styles";

export default function Email() {
  const {
    state: {
      email: { isComponentActive, isSent },
    },
    actions: { setEmailComponentAsInactive },
  } = useAuthContext();

  const timeToInactivateComponent = 500;

  useEffect(() => {
    if (isSent) {
      setTimeout(setEmailComponentAsInactive, timeToInactivateComponent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSent]);

  if (isComponentActive) {
    return (
      <SEmail>
        <LanguageSwitcher />
        <Heading />
        <Description />
        <Form />
        <SLock />
      </SEmail>
    );
  }

  return <></>;
}
