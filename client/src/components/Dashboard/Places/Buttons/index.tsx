// Context.
import { useGlobalContext } from "../../../../context";

// Styles.
import { SNote, SButton, SSecondButton } from "./styles";

export default function Places() {
  const {
    state: {
      historicPlaces,
      maximumNumberOfPlaces,
      currentPlace: { id },
    },
    actions: { getRandomPlaceDetails, setHistoricPlacesModalOn },
  } = useGlobalContext();

  const createNote = () => {
    let note =
      "Możesz sprawdzić miejsca, które już zapisałeś lub wybrać losowo z pośród tych, które pojawiły się na podstawie filtrów.";

    if (maximumNumberOfPlaces < 2 && historicPlaces.length > 0) {
      note = "Możesz sprawdzić lokalizacje, które wczesniej zapisałeś.";
    }

    if (maximumNumberOfPlaces > 1 && historicPlaces.length === 0) {
      note =
        "Możesz wybrać losowo z pośród tych miejsc, które pojawiły się na podstawie filtrów.";
    }

    if (maximumNumberOfPlaces < 2 && historicPlaces.length === 0) {
      note = "";
    }

    return note;
  };

  let note = createNote();

  return (
    <>
      <SNote>{note}</SNote>
      {historicPlaces.length > 0 && (
        <SButton
          onClickHandler={setHistoricPlacesModalOn}
          text="Pokaż miejsca, które zapisałem"
        />
      )}

      {maximumNumberOfPlaces > 1 && (
        <SSecondButton
          onClickHandler={() => getRandomPlaceDetails(id)}
          text="Wybierz losowe miejsce"
        />
      )}
    </>
  );
}
