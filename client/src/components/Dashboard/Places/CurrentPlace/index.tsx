// Functions.
import { useEffect } from "react";

// Controllers.
import Helper from "@controllers/Helper";

// Context.
import { useHistoricPlacesContext } from "@context/HistoricPlaces";
import { useDetailsContext } from "@context/Details";
import { useTranslation } from "react-i18next";

// Styles.
import { SDetails, SClose } from "./styles";

// Icons.
import closeIconPath from "@images/close.svg";

// Components.
import Info from "./Info";
import Map from "./Map";
import Buttons from "./Buttons";

export default function Details() {
  const {
    state: { isHistoricPlacesModalOpen },
  } = useHistoricPlacesContext();

  const {
    state: { isCurrentPlaceModalOpen },
    actions: { setCurrentPlaceModalOff },
  } = useDetailsContext();

  useEffect(
    () => {
      Helper.makeBodyUnscrollable(
        isCurrentPlaceModalOpen || isHistoricPlacesModalOpen
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isCurrentPlaceModalOpen]
  );

  const { t } = useTranslation();

  return (
    <SDetails isModalOpen={isCurrentPlaceModalOpen}>
      {isCurrentPlaceModalOpen && (
        <SClose
          onClickHandler={setCurrentPlaceModalOff}
          text={t("Dashboard.Places.CurrentPlace.SClose__text")}
          icon={closeIconPath}
        />
      )}
      <Info />
      <Map />
      <Buttons />
    </SDetails>
  );
}
