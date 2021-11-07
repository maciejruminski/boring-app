// Functions.
import { useRef } from "react";

// Context.
import { useGlobalContext } from "../context";

export default function OneTimePassword() {
  const { actions } = useGlobalContext();
  const oneTimePasswordRef = useRef<HTMLInputElement>(null);
  const verifyOneTimePassword = (evt: React.FormEvent<HTMLFormElement>) =>
    actions.verifyOneTimePassword(evt, oneTimePasswordRef?.current?.value);

  return (
    <>
      <form method="POST" onSubmit={verifyOneTimePassword}>
        <label>Enter otp</label>
        <input
          type="text"
          name="oneTimePassword"
          required
          ref={oneTimePasswordRef}
        />

        <button type="submit">Submit</button>
      </form>

      {/* <form method="POST" action="resend">
        <p className="full">
          <button type="submit">resend otp</button>
        </p>
      </form> */}
    </>
  );
}
