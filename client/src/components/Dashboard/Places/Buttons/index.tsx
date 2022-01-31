// Context.
import { useGlobalContext } from "../../../../context";

// Styles.
import { SButton } from "./styles";

export default function Buttons(): JSX.Element {
  const {
    state: {
      places,
      currentPlace: { id },
    },
    actions: { getRandomPlaceDetails, setHistoricPlacesModalOn },
  } = useGlobalContext();

  return (
    <>
      <SButton
        onClickHandler={() => getRandomPlaceDetails(id)}
        text="Wybierz losowe miejsce"
      />
      <SButton
        onClickHandler={setHistoricPlacesModalOn}
        text="Pokaż miejsca, w których już byłem"
      />
    </>
  );
}
