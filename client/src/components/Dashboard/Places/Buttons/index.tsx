// Context.
import { useGlobalContext } from "../../../../context";

// Styles.
import { SButton } from "./styles";

export default function Buttons(): JSX.Element {
  const {
    state: {
      places,
      currentPlace: {
        details: { id },
      },
    },
    actions: { getRandomPlace, setHistoricPlacesModalOn },
  } = useGlobalContext();

  return (
    <>
      <SButton
        onClickHandler={() => getRandomPlace(places, id)}
        text="Wybierz losowe miejsce"
      />
      <SButton
        onClickHandler={setHistoricPlacesModalOn}
        text="Pokaż miejsca, w których już byłem"
      />
    </>
  );
}
