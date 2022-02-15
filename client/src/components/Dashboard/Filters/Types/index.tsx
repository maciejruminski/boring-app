// Functions.
import { forwardRef } from "react";

// Context.
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";
import { useTranslation } from "react-i18next";

// Components.
import Select from "@common/Form/Select";

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

    const { t } = useTranslation();

    return (
      <Select
        label={t("Dashboard.Filters.Types.Select__label")}
        options={types}
        defaultOption={type}
        id="types"
        ref={ref}
      />
    );
  }
);
