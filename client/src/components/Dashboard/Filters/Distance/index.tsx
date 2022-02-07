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
        filters: { distance },
      },
    } = useGlobalContext();

    const distances = {
      "300": "300m",
      "650": "650m",
      "1000": "1km",
      "1500": "1.5km",
      "2000": "2km",
      "3000": "3km",
    };

    return (
      <Select
        label="Dystans"
        options={distances}
        defaultOption={distance}
        id="distance"
        ref={ref}
      />
    );
  }
);
