// Context.
import { usePlacesContext } from "../../../../context/Places";

// Styles.
import { SHeading, SSmallNote, SNote } from "./styles";

export default function Heading() {
  const {
    state: { maximumNumberOfPlaces },
  } = usePlacesContext();

  return (
    <>
      <SHeading>Lokalizacje</SHeading>
      {Boolean(maximumNumberOfPlaces) && (
        <>
          <SSmallNote>{maximumNumberOfPlaces} wyników wyszukiwania.</SSmallNote>
          <SNote>Kliknij w wybrane miejsce aby uzyskać szczegóły.</SNote>
        </>
      )}
    </>
  );
}
