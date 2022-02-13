// Context.
import { useHistoricPlacesContext } from "@context/HistoricPlaces";

// Components.
import Place from "../../Place";

// Styles.
import { SList, SListContainer } from "./styles";

export default function List(): JSX.Element {
  const {
    state: { historicPlaces },
  } = useHistoricPlacesContext();

  if (historicPlaces.length) {
    return (
      <SListContainer>
        <SList>
          {historicPlaces.map((place: any) => (
            <Place place={place} key={place.id} isVisible={true} />
          ))}
        </SList>
      </SListContainer>
    );
  }

  return <p>Loading...</p>;
}
