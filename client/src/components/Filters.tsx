// Functions.
import { useEffect } from "react";

// Context.
import { useGlobalContext } from "../context";

// Components.
import Form from "./Filters/Form";

export default function Filters() {
  const { state, actions } = useGlobalContext();

  useEffect(() => actions.filter(state.filters.types), []);

  console.log(state.filters);

  return (
    <div>
      <button onClick={() => actions.setFiltersModalOn()}>Pokaż filtry</button>

      <Form />

      <div>
        <h3>Filtry:</h3>
        <p>Distance: {state.filters.types.distance}</p>
        <p>Keyword: {state.filters.types.keyword}</p>
        <p>Type: {state.filters.types.type}</p>
        <p>Min Price: {state.filters.types.minPrice}</p>
        <p>Max Price: {state.filters.types.maxPrice}</p>
        <p>Open Now: {state.filters.types.openNow ? "true" : "false"}</p>
      </div>
    </div>
  );
}
