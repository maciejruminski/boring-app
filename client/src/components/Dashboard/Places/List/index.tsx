// Functions.
import { useEffect } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Place from "../Place";

// Styles.
import { SList, SListContainer } from "./styles";

export default function List(): JSX.Element {
  const {
    state: { places, filters },
    actions: { filter, getPlaceDetails },
  } = useGlobalContext();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => filter(filters), []);

  if (places.length) {
    return (
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
      </SListContainer>
    );
  }

  return <p>Loading...</p>;
}
