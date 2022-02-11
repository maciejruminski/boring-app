// Styles.
import { SSpinner, SSpinnerIcon } from "./styles";

export default function Spinner({ isBusy }: { isBusy: boolean }): JSX.Element {
  if (isBusy) {
    <SSpinner isBusy={isBusy}>
      <SSpinnerIcon>Wczytywanie...</SSpinnerIcon>
    </SSpinner>;
  }

  return <></>;
}
