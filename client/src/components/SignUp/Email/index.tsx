// Context.
import { useGlobalContext } from "../../../context";

// Components.
import { Lock } from "../../Common/Icons";
import Heading from "./Heading";
import Description from "./Description";
import Form from "./Form";

// Styles.
import { SEmail, SEmailContainer } from "./styles";

export default function Email() {
  const {
    state: {
      signUp: { error },
    },
  } = useGlobalContext();

  return (
    <SEmail isError={error}>
      {/* {state.isBusy ? "busy" : ""} */}
      {/* {state.signUp.isSent ? 'test' : ''} */}
      <SEmailContainer>
        <Heading />
        <Description />
        <Form />
      </SEmailContainer>

      <Lock />
    </SEmail>
  );
}
