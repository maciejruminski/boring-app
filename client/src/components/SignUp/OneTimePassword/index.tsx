// Functions.
import { useEffect } from "react";

// Context.
import { useAuthContext } from "@context/Auth";

// Components.
import Info from "./Info";
import Form from "./Form";
import ResendForm from "./ResendForm";

// Styles.
import { SOneTimePassword, SOneTimePasswordContainer, SLock } from "./styles";

export default function OneTimePassword() {
  const {
    state: {
      password: { isComponentInactive },
    },
    actions: { setUserAuthenticationOn },
  } = useAuthContext();

  const fadingOutTime = 500;

  useEffect(() => {
    if (isComponentInactive) {
      setTimeout(setUserAuthenticationOn, fadingOutTime);
    }
  }, [isComponentInactive]);

  return (
    <SOneTimePassword isModalOpen={true}>
      <SOneTimePasswordContainer isFadingOut={isComponentInactive}>
        <Info />
        <Form />
        <ResendForm />
        <SLock />
      </SOneTimePasswordContainer>
    </SOneTimePassword>
  );
}
