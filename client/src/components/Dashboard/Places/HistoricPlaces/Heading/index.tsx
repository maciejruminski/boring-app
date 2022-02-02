// Context.
import { useGlobalContext } from "../../../../../context";

// Styles.
import { SHeading, SNote } from "./styles";

export default function Heading() {
  const {
    state: { maximumNumberOfPlaces },
  } = useGlobalContext();

  return (
    <>
      <SHeading>Zapisane lokalizacje</SHeading>
      {Boolean(maximumNumberOfPlaces) && (
        <SNote>Kliknij w wybrane miejsce aby uzyskać szczegóły.</SNote>
      )}
    </>
  );
}
