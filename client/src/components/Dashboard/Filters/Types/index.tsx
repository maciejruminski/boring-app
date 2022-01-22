// Functions.
import { forwardRef } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Select from "../../../Common/Form/Select";

// Array with types.
import types from "./filterTypes";

export default forwardRef<HTMLSelectElement>(
  ({}, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const {
      state: {
        filters: {
          types: { type },
        },
      },
    } = useGlobalContext();

    return (
      <Select
        label="Type"
        options={types}
        defaultOption={type}
        id="types"
        ref={ref}
      />
    );
  }
);
