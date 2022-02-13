// Functions.
import { useEffect } from "react";

// Components.
import Heading from "./Heading";
import Description from "./Description";
import Form from "./Form";

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
  }, [isSent]);

  if (isComponentActive) {
    return (
      <SEmail>
        <Heading />
        <Description />
        <Form />
        <SLock />
      </SEmail>
    );
  }

  return <></>;
}
