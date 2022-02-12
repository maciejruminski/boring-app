// Context.
import useAuthContext from "../../../context/Auth/useAuthContext";

// Components.
import Info from "./Info";
import Form from "./Form";
import ResendForm from "./ResendForm";

// Styles.
import { SOneTimePassword, SOneTimePasswordContainer, SLock } from "./styles";

export default function OneTimePassword() {
  const {
    state: { isOneTimePasswordModalOpen, isFadingOut },
  } = useAuthContext();

  return (
    <SOneTimePassword isModalOpen={isOneTimePasswordModalOpen}>
      <SOneTimePasswordContainer isFadingOut={isFadingOut}>
        <Info />
        <Form />
        <ResendForm />
        <SLock />
      </SOneTimePasswordContainer>
    </SOneTimePassword>
  );
}
