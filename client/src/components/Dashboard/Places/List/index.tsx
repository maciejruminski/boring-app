// Functions.
import { useEffect } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Place from "./Place";

// Styles.
import { SList, SListContainer } from "./styles";

export default function List(): JSX.Element {
  const {
    state: {
      places,
      filters: { types },
    },
    actions: { filter, getPlace },
  } = useGlobalContext();

  useEffect(() => filter(types), []);

  if (places.length) {
    return (
      <SListContainer>
        <SList>
          {places.map((place: any) => (
            <Place place={place} getPlace={getPlace} />
          ))}
        </SList>
      </SListContainer>
    );
  }

  return <p>Loading...</p>;
}
