// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Place from "../Place";

// Styles.
import { SModal, SList, SListContainer } from "./styles";

export default function HistoricPlaces(): JSX.Element {
  const {
    state: {
      historicPlaces: { places },
      modals: { isHistoricPlacesModalOpen },
    },
    actions: {
      // setHistoricPlacesModalOff,
      getPlaceDetails,
    },
  } = useGlobalContext();

  if (places.length) {
    return (
      <SModal isModalOpen={isHistoricPlacesModalOpen}>
        <SListContainer>
          <SList>
            {places.map((place: any) => (
              <Place
                place={place}
                getPlaceDetails={getPlaceDetails}
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
