// Functions.
import { useEffect } from "react";

// Controllers.
import Helper from "../../../../controllers/Helper";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Heading from "./Heading";
import List from "./List";

// Styles.
import { SModal, SButton } from "./styles";

// Icons.
import closeIconPath from "../../../../images/close.svg";

export default function HistoricPlaces(): JSX.Element {
  const {
    state: {
      historicPlaces,
      modals: { isHistoricPlacesModalOpen },
    },
    actions: { setHistoricPlacesModalOff },
  } = useGlobalContext();

  useEffect(
    () => Helper.makeBodyUnscrollable(isHistoricPlacesModalOpen),
    [isHistoricPlacesModalOpen]
  );

  if (Boolean(historicPlaces.length)) {
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
