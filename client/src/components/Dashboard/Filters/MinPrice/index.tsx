// Functions.
import { forwardRef } from "react";

// Context.
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";
import { useTranslation } from "react-i18next";

// Components.
import Select from "@common/Form/Select";

// Array with prices.
import prices from "../prices";

export default forwardRef<HTMLSelectElement>(
  // eslint-disable-next-line no-empty-pattern
  ({}, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const {
      state: {
        filters: { minPrice },
      },
    } = useFiltersAndPlacesContext();

    const { t } = useTranslation();

    return (
      <Select
        label={t("Dashboard.Filters.MinPrice.Select__label")}
        options={prices}
        defaultOption={minPrice}
        id="minPrice"
        ref={ref}
      />
    );
  }
);
