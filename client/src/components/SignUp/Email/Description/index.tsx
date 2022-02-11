// Styles.
import { SDescription, SHeading } from "./styles";

export default function Description() {
  return (
    <SDescription>
      <p>
        Are you feeling bored? Perhaps this application will help you find some
        interesting place.
      </p>
      <p>You are only two small steps away from using it.</p>
      <SHeading>Verification</SHeading>
      <p>
        We will send you a <b>One Time Password</b> on your e-mail. We do not
        store your email address anywhere!
      </p>
    </SDescription>
  );
}
