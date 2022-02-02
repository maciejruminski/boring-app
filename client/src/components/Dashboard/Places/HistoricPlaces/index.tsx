// Functions.
import { useEffect } from "react";

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

  if (historicPlaces.length) {
    return (
      <SModal isModalOpen={isHistoricPlacesModalOpen}>
        <SButton
          onClickHandler={setHistoricPlacesModalOff}
          text="Submit"
          icon={closeIconPath}
        />
        <Heading />
        <List />
      </SModal>
    );
  }

  return <p>Loading...</p>;
}
