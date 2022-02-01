// Context.
import { useGlobalContext } from "../../../../../context";

// Components.
import Place from "../../Place";

// Styles.
import { SList, SListContainer } from "./styles";

export default function List(): JSX.Element {
  const {
    state: { historicPlaces },
    actions: { getCurrentPlaceDetails },
  } = useGlobalContext();

  if (historicPlaces.length) {
    return (
      <SListContainer>
        <SList>
          {historicPlaces.map((place: any) => (
            <Place
              place={place}
              getCurrentPlaceDetails={getCurrentPlaceDetails}
              key={place.id}
              isVisible={true}
            />
          ))}
        </SList>
      </SListContainer>
    );
  }

  return <p>Loading...</p>;
}
