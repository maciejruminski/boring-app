// Functions.
import { forwardRef } from "react";

// Context.
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";
import { useTranslation } from "react-i18next";

// Components.
import Checkbox from "@common/Form/Checkbox";

// eslint-disable-next-line no-empty-pattern
export default forwardRef<HTMLInputElement>(({}, ref) => {
  const {
    state: {
      filters: { openNow },
    },
  } = useFiltersAndPlacesContext();

  const { t } = useTranslation();

  return (
    <Checkbox
      label={t("Dashboard.Filters.OpenNow.Checkbox__label")}
      defaultValue={openNow ? true : false}
      id="openNow"
      ref={ref}
    />
  );
});
