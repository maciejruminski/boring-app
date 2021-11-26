import styled from "styled-components";

// Functions.
import { useRef } from "react";

// Context.
import { useGlobalContext } from "../../context";

export default () => {
  const { state, actions } = useGlobalContext();

  return (
    <div>
    <h3>Filtry:</h3>
    <p>Distance: {state.filters.types.distance}</p>
    <p>Keyword: {state.filters.types.keyword}</p>
    <p>Type: {state.filters.types.type}</p>
    <p>Min Price: {state.filters.types.minPrice}</p>
    <p>Max Price: {state.filters.types.maxPrice}</p>
    <p>Open Now: {state.filters.types.openNow ? "true" : "false"}</p>
  </div>
  );
};
