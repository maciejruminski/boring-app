// Functions.
import { useEffect } from "react";

// Context.
import { useGlobalContext } from "../../context";

// Components.
import Place from "./Place";

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
      <ul>
        {places.map((place: any) => (
          <Place place={place} getPlace={getPlace} />
        ))}
      </ul>
    );
  }

  return <p>Loading...</p>;
}
