// Functions.
import { useEffect, useState } from "react";

// Controllers.
import Helper from "@controllers/Helper";

// Context.
import { useHistoricPlacesContext } from "@context/HistoricPlaces";
import { useTranslation } from "react-i18next";

// Components.
import Heading from "./Heading";
import List from "./List";

// Styles.
import { SModal, SButton } from "./styles";

// Icons.
import closeIconPath from "@images/close.svg";

export default function HistoricPlaces(): JSX.Element {
  const {
    state: { historicPlaces, isHistoricPlacesModalOpen },
    actions: { setHistoricPlacesModalOff, setHistoricPlaces },
  } = useHistoricPlacesContext();

  useEffect(() => setHistoricPlaces(), []);

  useEffect(
    () => Helper.makeBodyUnscrollable(isHistoricPlacesModalOpen),
    [isHistoricPlacesModalOpen]
  );

  const fadingOutTime = 500;
  const [isFadingOut, setIsFadingOut] = useState(false);

  const modalOff = () => {
    setIsFadingOut(true);
    setTimeout(setHistoricPlacesModalOff, fadingOutTime);
  };

  useEffect(() => {
    if (!isHistoricPlacesModalOpen) {
      setIsFadingOut(false);
    }
  }, [isHistoricPlacesModalOpen]);

  const { t } = useTranslation();

  const historicPlacesExist = historicPlaces.length > 0;

  if (historicPlacesExist && isHistoricPlacesModalOpen) {
    return (
      <SModal isModalOpen={isHistoricPlacesModalOpen} isFadingOut={isFadingOut}>
        <SButton
          onClickHandler={modalOff}
          text={t("Dashboard.Places.HistoricPlaces.SButton__text")}
          icon={closeIconPath}
        />
        <Heading />
        <List />
      </SModal>
    );
  }

  return <></>;
}
