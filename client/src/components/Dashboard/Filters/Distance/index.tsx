// Functions.
import { forwardRef } from "react";

// Context.
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";
import { useTranslation } from "react-i18next";

// Components.
import Select from "@common/Form/Select";

export default forwardRef<HTMLSelectElement>(
  // eslint-disable-next-line no-empty-pattern
  ({}, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const {
      state: {
        filters: { distance },
      },
    } = useFiltersAndPlacesContext();

    const { t } = useTranslation();

    const distances = {
      "300": "300m",
      "650": "650m",
      "1000": "1km",
      "1500": "1.5km",
      "2000": "2km",
      "3000": "3km",
      "5000": "5km",
      "10000": "10km",
      "15000": "15km",
    };

    return (
      <Select
        label={t("Dashboard.Filters.Distance.Select__label")}
        options={distances}
        defaultOption={distance}
        id="distance"
        ref={ref}
      />
    );
  }
);
