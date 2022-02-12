// Functions.
import { useRef, useEffect } from "react";

// Controllers.
import Helper from "../../../../controllers/Helper";

// Context.
import useAuthContext from "../../../../context/Auth/useAuthContext";

// Styles.
import { SForm, SHeading, SNotification, SButton } from "./styles";

export default function ResendForm() {
  const {
    state: {
      signUp: { isEmailResent },
    },
    actions: { resendPassword },
  } = useAuthContext();

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    resendPassword("mac-rum@wp.pl");
  };

  const notificationRef = useRef<HTMLParagraphElement>(null);

  useEffect(
    () =>
      Helper.setInputErrorMessageHeight(
        notificationRef.current as HTMLParagraphElement
      ),
    [isEmailResent]
  );

  return (
    <SForm method="POST" onSubmit={handleFormSubmit} action="www">
      <SHeading>No email?</SHeading>
      <p>If you haven't received your email, click here to resend.</p>

      {isEmailResent && (
        <SNotification ref={notificationRef}>
          <div>Password has been sent!</div>
        </SNotification>
      )}

      <SButton type="submit" text="Resend One Time Password" />
    </SForm>
  );
}
