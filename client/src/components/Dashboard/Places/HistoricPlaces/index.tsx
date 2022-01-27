// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Place from "../Place";

// Styles.
import { SModal, SList, SListContainer } from "./styles";

export default function HistoricPlaces(): JSX.Element {
  const {
    state: {
      historicPlaces,
      modals: { isHistoricPlacesModalOpen },
    },
    actions: {
      // setHistoricPlacesModalOff,
      getCurrentPlaceDetails,
    },
  } = useGlobalContext();

  if (historicPlaces.length) {
    return (
      <SModal isModalOpen={isHistoricPlacesModalOpen}>
        <SListContainer>
          <SList>
            {historicPlaces.map((place: any) => (
              <Place
                place={place}
                getCurrentPlaceDetails={getCurrentPlaceDetails}
                key={place.id}
              />
            ))}
          </SList>

          {/* <Button
          onClickHandler={setHistoricPlacesModalOff}
          text="Submit"
        /> */}
        </SListContainer>
      </SModal>
    );
  }

  return <p>Loading...</p>;
}
