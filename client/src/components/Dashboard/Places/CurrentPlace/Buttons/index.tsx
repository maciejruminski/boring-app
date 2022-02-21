// Controllers.
import Helper from "@controllers/Helper";

// Context.
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";
import { useHistoricPlacesContext } from "@context/HistoricPlaces";
import { useDetailsContext } from "@context/Details";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  if (isCurrentPlaceModalOpen) {
    return (
      <>
        {!isHistoricPlacesModalOpen && (
          <SSecondButton
            text={t(
              "Dashboard.Places.CurrentPlace.Buttons.SSecondButton__text"
            )}
            onClickHandler={() => showDetails(randomPlace)}
          />
        )}

        <SButton
          onClickHandler={() =>
            isSavedAsHistoric
              ? removeHistoricPlace(currentPlace)
              : addHistoricPlace(currentPlace)
          }
          text={
            isSavedAsHistoric
              ? t("Dashboard.Places.CurrentPlace.Buttons.SButton__text--true")
              : t("Dashboard.Places.CurrentPlace.Buttons.SButton__text--false")
          }
          isSaved={isSavedAsHistoric}
        />
      </>
    );
  }

  return <></>;
}
