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
    actions: { getRandomPlace, getHistoricPlaces },
  } = useGlobalContext();

  return (
    <>
      <SButton
        onClickHandler={() => getRandomPlace(places, id)}
        text="Wybierz losowe miejsce"
      />
      <SButton
        onClickHandler={getHistoricPlaces}
        text="Pokaż miejsca, w których już byłem"
      />
    </>
  );
}
