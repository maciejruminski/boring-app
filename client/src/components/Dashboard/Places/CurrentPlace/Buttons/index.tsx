// Controllers.
import Helper from "../../../../../controllers/Helper";

// Context.
import { useFiltersAndPlacesContext } from "../../../../../context/FiltersAndPlaces";
import { useHistoricPlacesContext } from "../../../../../context/HistoricPlaces";
import { useDetailsContext } from "../../../../../context/Details";

// Styles.
import { SButton, SSecondButton } from "./styles";

export default function Details() {
  const {
    state: { places },
  } = useFiltersAndPlacesContext();

  const {
    state: { historicPlaces, isHistoricPlacesModalOpen },
    actions: { addHistoricPlace, removeHistoricPlace },
  } = useHistoricPlacesContext();

  const {
    state: { currentPlace, isCurrentPlaceModalOpen },
    actions: { showDetails },
  } = useDetailsContext();

  const { id } = currentPlace;
  const isSavedAsHistoric = Helper.getPlaceById(historicPlaces, id);
  const randomPlace = Helper.getRandomPlace(places, id);

  if (isCurrentPlaceModalOpen) {
    return (
      <>
        <SButton
          onClickHandler={() =>
            isSavedAsHistoric
              ? removeHistoricPlace(currentPlace)
              : addHistoricPlace(currentPlace)
          }
          text={
            isSavedAsHistoric
              ? "Usuń lokację z historii"
              : "Zapisz lokację w historii"
          }
        />

        {!isHistoricPlacesModalOpen && (
          <SSecondButton
            text="Losuj inne miejsce"
            onClickHandler={() => showDetails(randomPlace)}
          />
        )}
      </>
    );
  }

  return <></>;
}
