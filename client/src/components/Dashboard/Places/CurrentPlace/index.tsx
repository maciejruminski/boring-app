// Functions.
import { useEffect, useState } from "react";

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
import Spinner from "@common/Spinner";

export default function Details() {
  const {
    state: { isHistoricPlacesModalOpen },
  } = useHistoricPlacesContext();

  const {
    state: { isCurrentPlaceModalOpen, isBusy },
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

  const fadingOutTime = 500;
  const [isFadingOut, setIsFadingOut] = useState(false);

  const modalOff = () => {
    setIsFadingOut(true);
    setTimeout(setCurrentPlaceModalOff, fadingOutTime);
  };

  useEffect(() => {
    if (!isCurrentPlaceModalOpen) {
      setIsFadingOut(false);
    }
  }, [isCurrentPlaceModalOpen]);

  return (
    <>
      <Spinner isBusy={isBusy} />
      <SDetails isModalOpen={isCurrentPlaceModalOpen} isFadingOut={isFadingOut}>
        <SClose
          onClickHandler={modalOff}
          text={t("Dashboard.Places.CurrentPlace.SClose__text")}
          icon={closeIconPath}
        />
        <Info />
        <Map />
        <Buttons />
      </SDetails>
    </>
  );
}
