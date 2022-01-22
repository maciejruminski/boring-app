// Functions.
import { forwardRef } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Select from "../../../Common/Form/Select";

export default forwardRef<HTMLSelectElement>(
  ({}, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const {
      state: {
        filters: {
          types: { distance },
        },
      },
    } = useGlobalContext();

    const distances = [100, 300, 500, 2000];

    return (
      <Select
        label="Distance"
        options={distances}
        defaultOption={distance}
        id="distance"
        ref={ref}
      />
    );
  }
);
