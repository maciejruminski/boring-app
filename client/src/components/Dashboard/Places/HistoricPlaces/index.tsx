// Functions.
import { useEffect } from "react";

// Controllers.
import Helper from "@controllers/Helper";

// Context.
import useHistoricPlacesContext from "@context/HistoricPlaces/useHistoricPlacesContext";

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

  const historicPlacesExist = historicPlaces.length > 0;

  if (historicPlacesExist) {
    return (
      <SModal isModalOpen={isHistoricPlacesModalOpen}>
        <SButton
          onClickHandler={setHistoricPlacesModalOff}
          text="Zamknij modal z zapisanymi miejscami"
          icon={closeIconPath}
        />
        <Heading />
        <List />
      </SModal>
    );
  }

  return <></>;
}
