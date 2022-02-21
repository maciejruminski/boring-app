// Functions.
import { useEffect, useState, useRef } from "react";

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
    state: { isHistoricPlacesModalOpen, isBusy: isBusyHistoric },
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

  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isBusy) {
      setTimeout(() => {
        if (labelRef && labelRef.current) {
          labelRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [isBusy]);

  return (
    <>
      <Spinner isBusy={isBusy || isBusyHistoric} />
      <SDetails
        ref={labelRef}
        isModalOpen={isCurrentPlaceModalOpen}
        isFadingOut={isFadingOut}
      >
        {isCurrentPlaceModalOpen && (
          <SClose
            onClickHandler={modalOff}
            text={t("Dashboard.Places.CurrentPlace.SClose__text")}
            icon={closeIconPath}
          />
        )}
        <Info />
        <Map />
        <Buttons />
      </SDetails>
    </>
  );
}
