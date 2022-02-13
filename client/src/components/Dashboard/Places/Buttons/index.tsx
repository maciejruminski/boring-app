// Controllers.
import Helper from "@controllers/Helper";

// Context.
import usePlacesContext from "@context/Places/usePlacesContext";
import useHistoricPlacesContext from "@context/HistoricPlaces/useHistoricPlacesContext";
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";
import useDetailsContext from "@context/Details/useDetailsContext";

// Styles.
import { SNote, SButton, SSecondButton } from "./styles";

export default function Places() {
  const {
    state: { places },
  } = useFiltersAndPlacesContext();

  const {
    actions: { showDetails },
  } = useDetailsContext();

  const {
    state: { maximumNumberOfPlaces },
  } = usePlacesContext();

  const {
    state: { historicPlaces },
    actions: { setHistoricPlacesModalOn },
  } = useHistoricPlacesContext();

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

  const randomPlace = Helper.getRandomPlace(places, "");

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
          onClickHandler={() => showDetails(randomPlace)}
          text="Wybierz losowe miejsce"
        />
      )}
    </>
  );
}
