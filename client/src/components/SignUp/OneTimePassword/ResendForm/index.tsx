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
      email: { isResent },
    },
    actions: { sendPassword },
  } = useAuthContext();

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    sendPassword("mac-rum@wp.pl", true);
  };

  const notificationRef = useRef<HTMLParagraphElement>(null);

  useEffect(
    () =>
      Helper.setInputErrorMessageHeight(
        notificationRef.current as HTMLParagraphElement
      ),
    [isResent]
  );

  return (
    <SForm method="POST" onSubmit={handleFormSubmit}>
      <SHeading>No email?</SHeading>
      <p>If you haven't received your email, click here to resend.</p>

      {isResent && (
        <SNotification ref={notificationRef}>
          <div>Password has been sent!</div>
        </SNotification>
      )}

      <SButton type="submit" text="Resend One Time Password" />
    </SForm>
  );
}
