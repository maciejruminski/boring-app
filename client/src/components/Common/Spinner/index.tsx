// Functions.
import { useState, useEffect } from "react";

// Styles.
import { SSpinner, SSpinnerIcon } from "./styles";

export default function Spinner({ isBusy }: { isBusy: boolean }): JSX.Element {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const fadingOutTime = 500;

  const spinnerIn = () => {
    setIsAnimated(true);
    setIsFadingOut(true);
  };

  const spinnerOut = () => {
    setIsAnimated(false);
    setTimeout(setIsFadingOut, fadingOutTime, false);
  };

  useEffect(() => (isBusy ? spinnerIn() : spinnerOut()), [isBusy]);

  if (isBusy || isFadingOut) {
    return (
      <SSpinner isBusy={isAnimated}>
        <SSpinnerIcon>Wczytywanie...</SSpinnerIcon>
      </SSpinner>
    );
  }

  return <></>;
}
