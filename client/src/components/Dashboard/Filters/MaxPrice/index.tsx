// Functions.
import { forwardRef } from "react";

// Context.
import useFiltersAndPlacesContext from "../../../../context/FiltersAndPlaces/useFiltersAndPlacesContext";

// Components.
import Select from "../../../Common/Form/Select";

// Array with prices.
import prices from "../prices";

export default forwardRef<HTMLSelectElement>(
  // eslint-disable-next-line no-empty-pattern
  ({}, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const {
      state: {
        filters: { maxPrice },
      },
    } = useFiltersAndPlacesContext();

    return (
      <Select
        label="Cena max."
        options={prices}
        defaultOption={maxPrice}
        id="maxPrice"
        ref={ref}
      />
    );
  }
);
