// Functions.
import { forwardRef } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Select from "../../../Common/Form/Select";

export default forwardRef<HTMLSelectElement>(
  // eslint-disable-next-line no-empty-pattern
  ({}, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const {
      state: {
        filters: { maxPrice },
      },
    } = useGlobalContext();

    const prices = [0, 1, 2, 3];

    return (
      <Select
        label="Max price"
        options={prices}
        defaultOption={maxPrice}
        id="maxPrice"
        ref={ref}
      />
    );
  }
);