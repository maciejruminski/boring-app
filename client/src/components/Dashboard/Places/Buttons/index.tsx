// Controllers.
import Helper from "@controllers/Helper";

// Context.
import { usePlacesContext } from "@context/Places";
import { useHistoricPlacesContext } from "@context/HistoricPlaces";
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";
import { useDetailsContext } from "@context/Details";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  const createNote = () => {
    let note = t("Dashboard.Places.Buttons.SNote--1");

    if (maximumNumberOfPlaces < 2 && historicPlaces.length > 0) {
      note = t("Dashboard.Places.Buttons.SNote--2");
    }

    if (maximumNumberOfPlaces > 1 && historicPlaces.length === 0) {
      note = t("Dashboard.Places.Buttons.SNote--3");
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
          text={t("Dashboard.Places.Buttons.SButton__text")}
          id="showHistoricPlaces"
        />
      )}

      {maximumNumberOfPlaces > 1 && (
        <SSecondButton
          onClickHandler={() => showDetails(randomPlace)}
          text={t("Dashboard.Places.Buttons.SSecondButton__text")}
        />
      )}
    </>
  );
}
