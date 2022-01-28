// Context.
import { useGlobalContext } from "../../context";

// Styles.
import { SSpinner, SSpinnerIcon } from "./styles";

export default function Spinner(): JSX.Element {
  const {
    state: { isBusy },
  } = useGlobalContext();

  return (
    <SSpinner isBusy={isBusy}>
      <SSpinnerIcon>Wczytywanie...</SSpinnerIcon>
    </SSpinner>
  );
}
