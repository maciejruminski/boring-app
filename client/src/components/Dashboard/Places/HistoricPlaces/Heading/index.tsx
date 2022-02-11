// Context.
import useHistoricPlacesContext from "../../../../../context/HistoricPlaces/useHistoricPlacesContext";

// Styles.
import { SHeading, SNote, SSmallNote } from "./styles";

export default function Heading() {
  const {
    state: { historicPlaces },
  } = useHistoricPlacesContext();

  return (
    <>
      <SHeading>Historia</SHeading>
      {Boolean(historicPlaces.length) && (
        <>
          <SSmallNote>{historicPlaces.length} zapisanych miejsc.</SSmallNote>
          <SNote>Kliknij w wybrane miejsce aby uzyskać szczegóły.</SNote>
        </>
      )}
    </>
  );
}
