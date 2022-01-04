// Functions.
import { forwardRef } from "react";

// Context.
import { useGlobalContext } from "../../../context";

// Components.
import Select from "../../Common/Form/Select";

export default forwardRef<HTMLSelectElement>(
  ({}, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const {
      state: {
        filters: {
          types: { minPrice },
        },
      },
    } = useGlobalContext();

    const prices = [0, 1, 2, 3];

    return (
      <Select
        label="Min price"
        options={prices}
        defaultOption={minPrice}
        id="minPrice"
        ref={ref}
      />
    );
  }
);
