// Components.
import Heading from "./Heading";
import Description from "./Description";
import Form from "./Form";

// Styles.
import { SEmail, SLock } from "./styles";

export default function Email() {
  return (
    <SEmail>
      <Heading />
      <Description />
      <Form />
      <SLock />
    </SEmail>
  );
}
