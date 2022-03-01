// Controllers.
import Helper from "@controllers/Helper";

// Context.
import { useFiltersContext } from "@context/Filters";
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";
import { useTranslation } from "react-i18next";

// Components.
import Filter from "./Filter";

// Styles.
import {
  SContainer,
  SFiltersHeader,
  SHeading,
  SFiltersContainer,
  SButton,
} from "./styles";

// Icons.
import filterIconPath from "@images/hamburger.svg";

// Array with types and prices.
import prices from "../prices";

export default function Preview() {
  const {
    state: {
      filters: { distance, keyword, type, minPrice, maxPrice, openNow },
    },
  } = useFiltersAndPlacesContext();

  const {
    actions: { setFiltersModalOn },
  } = useFiltersContext();

  const formattedDistance = Helper.formatDistance(distance);
  const { t } = useTranslation();
  const types = Helper.getFilterTypesObject(t);

  return (
    <SContainer>
      <SFiltersHeader>
        <SHeading>{t("Dashboard.Filters.Preview.SHeading")}</SHeading>
        <SButton
          onClickHandler={setFiltersModalOn}
          text={t("Dashboard.Filters.Preview.SButton__text")}
          icon={filterIconPath}
        />
      </SFiltersHeader>
      <SFiltersContainer>
        <Filter
          text={t("Dashboard.Filters.Preview.Filter_1__text")}
          type={formattedDistance}
        />
        <Filter
          text={t("Dashboard.Filters.Preview.Filter_2__text")}
          type={keyword}
        />
        <Filter
          text={t("Dashboard.Filters.Preview.Filter_3__text")}
          type={types[type as keyof FilterTypes]}
        />
        {minPrice !== "_" && (
          <Filter
            text={t("Dashboard.Filters.Preview.Filter_4__text")}
            type={prices[minPrice as keyof Prices]}
          />
        )}
        {maxPrice !== "_" && (
          <Filter
            text={t("Dashboard.Filters.Preview.Filter_5__text")}
            type={prices[maxPrice as keyof Prices]}
          />
        )}
        <Filter
          text={t("Dashboard.Filters.Preview.Filter_6__text")}
          type={
            openNow
              ? t("Dashboard.Filters.Preview.Filter_6__type-true")
              : t("Dashboard.Filters.Preview.Filter_6__type-false")
          }
        />
      </SFiltersContainer>
    </SContainer>
  );
}
