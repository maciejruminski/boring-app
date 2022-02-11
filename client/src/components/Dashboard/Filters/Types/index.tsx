// Functions.
import { forwardRef } from "react";

// Context.
import useFiltersAndPlacesContext from "../../../../context/FiltersAndPlaces/useFiltersAndPlacesContext";

// Components.
import Select from "../../../Common/Form/Select";

// Array with types.
import types from "../filterTypes";

export default forwardRef<HTMLSelectElement>(
  // eslint-disable-next-line no-empty-pattern
  ({}, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const {
      state: {
        filters: { type },
      },
    } = useFiltersAndPlacesContext();

    return (
      <Select
        label="Typ"
        options={types}
        defaultOption={type}
        id="types"
        ref={ref}
      />
    );
  }
);
